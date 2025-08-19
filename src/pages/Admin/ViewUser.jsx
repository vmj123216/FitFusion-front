import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Logout, viewUser } from "../../services/ApiService";
import { User, BarChart2, Activity } from "lucide-react";
import { toast } from "react-toastify";

function ViewUser() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await viewUser(id);
                setUserData({
                    ...res.user,
                    stats: res.userStats || [],
                    workouts: res.userworkouts || []
                });
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
                Navigate('/');
                Logout();
            }
        };
        fetchUser();
    }, [id]);

    if (!userData) {
        return <div className="vu-container">Loading...</div>;
    }

    return (
        <div className="vu-container">
            {/* USER INFO CARD */}
            <div className="vu-card">
                <div className="vu-card-header">
                    <User /> User Data
                </div>
                <div className="vu-card-body vu-info-grid">
                    <div className="vu-info-box"><span className="vu-info-label">Name</span><span className="vu-info-value">{userData.name || "—"}</span></div>
                    <div className="vu-info-box"><span className="vu-info-label">Email</span><span className="vu-info-value">{userData.email || "—"}</span></div>
                    <div className="vu-info-box"><span className="vu-info-label">Contact</span><span className="vu-info-value">{userData.contact || "—"}</span></div>
                    <div className="vu-info-box"><span className="vu-info-label">Gender</span><span className="vu-info-value">{userData.gender || "—"}</span></div>
                    <div className="vu-info-box"><span className="vu-info-label">Age</span><span className="vu-info-value">{userData.age || "—"}</span></div>
                    <div className="vu-info-box"><span className="vu-info-label">Role</span><span className="vu-info-value">{userData.role || "—"}</span></div>
                    <div className="vu-info-box"><span className="vu-info-label">Joined</span><span className="vu-info-value">{userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : "—"}</span></div>
                </div>
            </div>

            {/* LATEST STATS CARD */}
            {userData.stats?.length > 0 && (
                <div className="vu-card">
                    <div className="vu-card-header">
                        <BarChart2 /> Latest Stats
                    </div>
                    <div className="vu-card-body vu-info-grid">
                        <div className="vu-info-box"><span className="vu-info-label">Date</span><span className="vu-info-value">{new Date(userData.stats[0].date).toLocaleDateString()}</span></div>
                        <div className="vu-info-box"><span className="vu-info-label">Goal</span><span className="vu-info-value">{userData.stats[0].goal || "—"}</span></div>
                        <div className="vu-info-box"><span className="vu-info-label">Height</span><span className="vu-info-value">{userData.stats[0].height || "—"} cm</span></div>
                        <div className="vu-info-box"><span className="vu-info-label">Weight</span><span className="vu-info-value">{userData.stats[0].weight || "—"} kg</span></div>
                    </div>
                </div>
            )}

            {/* WORKOUTS CARD */}
            {userData.workouts?.length > 0 && (
                <div className="vu-card">
                    <div className="vu-card-header">
                        <Activity /> User Workouts
                    </div>
                    <div className="vu-card-body">
                        <div className="vu-table-container">
                            <table className="vu-workouts-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Duration</th>
                                        <th>Calories</th>
                                        <th>Streak</th>
                                        <th>Type</th>
                                        <th>Exercises Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.workouts.flatMap((uw, i) =>
                                        uw.workouts.map((workout, j) => (
                                            <tr key={`${i}-${j}`}>
                                                <td>{workout.name || "—"}</td>
                                                <td>{workout.date || "—"}</td>
                                                <td>{workout.duration || "—"}</td>
                                                <td>{workout.calories || 0}</td>
                                                <td>{workout.streak || 0} days</td>
                                                <td>{workout.completed?.type || "—"}</td>
                                                <td>{workout.completed?.exercises?.length || 0}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewUser;
