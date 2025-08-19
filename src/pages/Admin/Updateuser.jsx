import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { EditUser, getUserById, Logout } from "../../services/ApiService";
import { toast } from "react-toastify";

export default function UpdateUser() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        gender: "",
        age: "",
        role: "User",
        joinedDate: ""
    });
    const [success, setSuccess] = useState(false);

    if (id === undefined || id === null) {
        return window.location.href = "/admin";
    }

    useEffect(() => {
        const FetchedUser = async () => {
            try {
                const res = await getUserById(id);
                if (res.user) {
                    setUser({
                        name: res.user.name,
                        email: res.user.email,
                        contact: res.user.contact,
                        gender: res.user.gender,
                        age: res.user.age,
                        role: res.user.role,
                        joinedDate: new Date(res.user.createdAt).toLocaleDateString()
                    });
                }

            } catch (error) {
                if (error.response && [401, 402, 403].includes(error.response.status)) {
                    localStorage.removeItem("token");
                    toast.error("Unauthorized access. Please log in again.");
                    Navigate("/");
                    return;
                } else if (error.response && error.response.status === 404) {
                    toast.error("User not found.");
                    Navigate("/admin");
                    return;
                }
                console.error("Error fetching user data:", error);
                localStorage.removeItem("token");
                toast.error(error.response?.data?.message || "Failed to fetch user data");
                Logout();
                Navigate('/');
            }
        }
        FetchedUser();
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {
                name: user.name,
                email: user.email,
                contact: user.contact,
                gender: user.gender,
                age: user.age,
                role: user.role,
            };

            const res = await EditUser(id, updatedData);
            console.log("Updated user:", res.user);

            setUser(res.user);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
            console.error("Error updating user:", error);
            alert(error.response?.data?.message || "Failed to update user");
        }
    };

    return (
        <Container className="fs-profile-container">
            <div className="fs-profile-header">
                <h1>Update User</h1>
                <p>Modify user details and role</p>
            </div>

            {success && (
                <div className="fs-profile-success">✅ User updated successfully!</div>
            )}

            <Form onSubmit={handleSubmit}>
                {/* User Information */}
                <div className="fs-profile-section">
                    <h2 className="fs-profile-section-title">👤 User Information</h2>
                    <div className="fs-profile-grid">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={user.name || ""} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={user.email || ""} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Contact</Form.Label>
                            <Form.Control name="contact" value={user.contact || ""} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" name="age" value={user.age || ""} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" name="gender" value={user.gender || ""} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Form.Group>

                    </div>
                </div>

                {/* Role & Join Date */}
                <div className="fs-profile-section">
                    <h2 className="fs-profile-section-title">⚙️ Role & Status</h2>
                    <div className="fs-profile-grid">
                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Select name="role" value={user.role} onChange={handleChange}>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Joined Date</Form.Label>
                            <Form.Control type="text" name="joinedDate" value={user.joinedDate} readOnly />
                        </Form.Group>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="fs-profile-actions">
                    <Button variant="secondary" onClick={() => window.history.back()} type="button">
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        💾 Save Changes
                    </Button>
                </div>
            </Form>
        </Container>
    );
}
