import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { profileUpdate } from "../../../services/ApiService";
import { toast } from "react-toastify";

const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const UserStats = useSelector((state) => state.user.userStats[0]);

    useEffect(() => {
        if (user && UserStats) {
            setFirstName(user.name);
            setEmail(user.email);
            setPhone(user.contact);
            setGender(user.gender);
            setHeight(UserStats.height);
            setWeight(UserStats.weight);
            setGoal(UserStats.goal);
            if (user?.createdAt) {
                const date = new Date(user.createdAt);
                const formatted = date.toISOString().split("T")[0];
                setJoinedDate(formatted);
            }
        }
    }, [user, UserStats]);

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [JoinDate, setJoinedDate] = useState(0);

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bodyFat, setBodyFat] = useState("");
    const [goal, setGoal] = useState("");

    const [success, setSuccess] = useState(false);

    const handleSave = async () => {
        try {
            const payload = { name: firstName, email: email, contact: phone, height: height, weight: weight, goal: goal, };
            const response = await profileUpdate(payload);
            if (response.status === 200) {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } catch (error) {
            console.error("Update failed:", error.response?.data || error.message);
            toast.error(error.response?.data?.message);
        }
    };

    const exercise = [
        "build-muscle",
        "improve-endurance",
        "burn-fat",
        "increase-flexibility",
        "maintain-weight",
        "lose-weight",
        "gain-weight",
        "improve-focus",
        "enhance-recovery",
        "train-event",
    ]

    return (
        <Container className="fs-profile-container">
            <div className="fs-profile-header">
                <h1>Profile Settings</h1>
                <p>Manage your fitness profile and preferences</p>
            </div>

            {success && <div className="fs-profile-success">✅ Profile updated successfully!</div>}

            {/* Personal Information */}
            <div className="fs-profile-section">
                <h2 className="fs-profile-section-title">👤 Personal Information</h2>
                <div className="fs-profile-grid">
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" value={gender} readOnly />
                    </Form.Group>
                </div>
            </div>

            {/* Physical Stats */}
            <div className="fs-profile-section">
                <h2 className="fs-profile-section-title">📊 Physical Stats</h2>
                <div className="fs-profile-grid">
                    <Form.Group>
                        <Form.Label>Height (cm)</Form.Label>
                        <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Weight (kg)</Form.Label>
                        <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Joined Date</Form.Label>
                        <Form.Control type="text" value={JoinDate} readOnly />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Body Fat % (optional)</Form.Label>
                        <Form.Control type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
                    </Form.Group>
                </div>
            </div>

            {/* Fitness Goals */}
            <div className="fs-profile-section">
                <h2 className="fs-profile-section-title">🎯 Fitness Goals</h2>
                <div className="fs-profile-goal-cards">
                    {exercise.map((g) => (
                        <div key={g} className={`fs-profile-goal-card ${goal === g ? "active" : ""}`} onClick={() => setGoal(g)}>
                            <h3>{g}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="fs-profile-actions">
                <Button variant="secondary" onClick={() => window.location.href = '/setting'}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>💾 Save Changes</Button>
            </div>
        </Container>
    );
};

export default Profile;
