import React, { useState, useEffect } from 'react';
import { Target, Activity, TrendingUp, Calendar, Award, Zap, Plus, ChevronRight, Trophy, Heart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { workouts } from '../../components/workouts';
import MeasurementModal from './MeasurementModal';

export default function FitnessDashboard() {
    const [showModal, setShowModal] = useState(false);
    const [stats, setStats] = useState({
        weeklyWorkouts: 0,
        totalWorkouts: 0,
        caloriesBurned: 0,
        averageWorkout: 0
    });

    const [recentWorkouts, setRecentWorkouts] = useState([]);
    const navigate = useNavigate();
    const userDataWorkout = useSelector((state) => state.user.workouts) || [];
    const userStats = useSelector((state) => state.user.userStats[0]) || {};
    const userData = useSelector((state) => state.user.user) || {
        name: "User",
    }
    useEffect(() => {
        setRecentWorkouts(userDataWorkout.slice(-4).reverse());
    }, [userDataWorkout]);

    useEffect(() => {
        if (!userDataWorkout?.length) return;

        const last7Days = new Date();
        last7Days.setDate(last7Days.getDate() - 7);

        const weeklyWorkouts = userDataWorkout.filter(w => new Date(w.date) >= last7Days).length;
        const totalCalories = userDataWorkout.reduce((sum, w) => sum + (w.calories || 0), 0);
        const totalDuration = userDataWorkout.reduce((sum, w) => sum + (parseInt(w.duration) || 0), 0);
        const avgDuration = Math.round(totalDuration / userDataWorkout.length);

        setStats({
            weeklyWorkouts,
            totalWorkouts: userDataWorkout.length,
            caloriesBurned: totalCalories,
            averageWorkout: `${avgDuration} min`
        });
    }, [userDataWorkout]);


    let level = "Beginner";
    if (userDataWorkout.streak >= 31) {
        level = "Advanced";
    } else if (userDataWorkout.streak >= 8) {
        level = "Intermediate";
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const todayName = daysOfWeek[today.getDay()];
    const tomorrowName = daysOfWeek[(today.getDay() + 1) % 7];
    const dayaftertomorrowName = daysOfWeek[(today.getDay() + 2) % 7];

    const upcomingWorkouts = [
        {
            name: workouts[todayName].type,
            time: "Today",
            type: workouts[todayName].type
        },
        {
            name: workouts[tomorrowName].type,
            time: "Tomorrow",
            type: workouts[tomorrowName].type
        },
        {
            name: workouts[dayaftertomorrowName].type,
            time: "Day After Tomorrow",
            type: workouts[dayaftertomorrowName].type
        }
    ];

    const latestTodayWorkout = recentWorkouts
        .filter(w => w.date.startsWith(new Date().toISOString().slice(0, 10))).pop();


    return (
        <>
            <div className="dashboard">
                <main className="dashboard-grid">
                    {/* Welcome Card */}
                    <section className="welcome-card">
                        <div className="welcome-info">
                            <h2>Welcome , {userData.name || "User"}! 🎯</h2>
                            <p>Ready to crush your {userStats.goal} goals today?</p>
                            <div className="user-stats">
                                <div>
                                    {latestTodayWorkout ? (
                                        <div>{latestTodayWorkout.streak || 0}</div>
                                    ) : (
                                        <div>No workouts today</div>
                                    )}
                                    <div>Day Streak</div>
                                </div>
                                <div>
                                    <div>{level}</div>
                                    <div>Level</div>
                                </div>
                            </div>
                        </div>
                        <Trophy size={64} className="trophy-icon" />
                    </section>

                    {/* Quick Stats */}
                    <section className="card quick-stats">
                        <h3><TrendingUp size={20} /> This Week</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div>{stats.weeklyWorkouts}</div>
                                <div>Workouts</div>
                            </div>
                            <div className="stat-item">
                                <div>{stats.totalWorkouts}</div>
                                <div>Total Workouts</div>
                            </div>
                            <div className="stat-item">
                                <div>{stats.caloriesBurned}</div>
                                <div>Calories</div>
                            </div>
                            <div className="stat-item">
                                <div>{stats.averageWorkout}</div>
                                <div>Average Workout</div>
                            </div>
                        </div>
                        <button className="btn-primary-accent mt-lg-3" onClick={() => navigate('/WorkoutPage')}>
                            Start Training
                        </button>
                    </section>

                    {/* New Personal Info Section */}
                    <div className="personal-stats-grid">
                        {(!userStats.weight && !userStats.height && !userStats.goal) ? (
                            <div className="card stat-card clickable" onClick={() => setShowModal(true)} style={{ cursor: "pointer", textAlign: "center", height: "-webkit-fill-available" }}>
                                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                    <div className="stat-value my-lg-1">No measurements yet</div>
                                    <small>Click to add now</small>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="card stat-card">
                                    <div className="stat-content">
                                        <div>
                                            <h3>Weight</h3>
                                            <div className="stat-value">{userStats.weight || "N/A"} kg</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card stat-card my-lg-1">
                                    <div className="stat-content">
                                        <div>
                                            <h3>Height</h3>
                                            <div className="stat-value">{userStats.height || "N/A"} cm</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card stat-card">
                                    <div className="stat-content">
                                        <div>
                                            <h3>Goal</h3>
                                            <div className="stat-value">{userStats.goal || "N/A"}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <MeasurementModal show={showModal} onHide={() => setShowModal(false)} onSave={(newData) => { console.log("Saved data:", newData); setShowModal(false); }} />

                    {/* Workout session */}
                    <div className="card">
                        <button className="btn-primary-accent" onClick={() => navigate('/WorkoutTimerPage')}>
                            Go to Workout Timer
                        </button>
                    </div>

                    {/* Recent Workouts */}
                    {recentWorkouts.length > 0 && (
                        <section className="card recent-workouts">
                            <h3><Activity size={20} /> Recent Workouts</h3>
                            <div className="workout-list">
                                {recentWorkouts.map((workout, i) => (
                                    <div key={i} className="workout-item">
                                        <div>
                                            <div className="workout-name">{workout.name}</div>
                                            <div className="workout-details">{workout.duration} • {workout.calories} cal • {workout.date}</div>
                                        </div>
                                        <CheckCircle size={16} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Upcoming Workouts */}
                    <section className="card upcoming-workouts">
                        <h3><Calendar size={20} /> Upcoming</h3>
                        <div className="workout-list">
                            {upcomingWorkouts.map((workout, i) => (
                                <div key={i} className="workout-item">
                                    <div>
                                        <div className="workout-name">{workout.name}</div>
                                        <div className="workout-details">{workout.time} • {workout.type}</div>
                                    </div>
                                    <ChevronRight size={16} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="card quick-actions">
                        <h3><Zap size={20} /> Quick Actions</h3>
                        <div className="actions-grid">
                            {[
                                { icon: Plus, label: 'Log Workout', color: 'var(--pastel-3)' },
                                { icon: Target, label: 'Set Goal', color: 'var(--pastel-1)' },
                                { icon: Award, label: 'View Progress', color: 'var(--pastel-2)' },
                                { icon: Heart, label: 'Health Stats', color: 'var(--pastel-4)' },
                            ].map(({ icon: Icon, label, color }, idx) => (
                                <button key={idx} className="action-btn" style={{ backgroundColor: color }}>
                                    <Icon size={24} />
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>
                    </section>
                </main >
            </div >
        </>
    );
}
