import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Trophy, Calendar, Target, Flame, ChevronLeft, ChevronRight, ArrowLeft, Undo } from 'lucide-react';
import { SendUserWorkout } from '../../services/ApiService';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { workouts } from '../../components/workouts';
import { useSelector } from 'react-redux';

const WorkoutTracker = () => {
    const [currentStreak, setCurrentStreak] = useState(0);
    const [completedExercises, setCompletedExercises] = useState(new Set([]));
    const [todayCompleted, setTodayCompleted] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const todayName = daysOfWeek[today];

    // Example: Get logged-in user ID (from auth, Redux, or context)
    const userId = useSelector((state) => state.user.user._id) || "guest";

    // Keys for user-specific storage
    const STREAK_KEY = `${userId}_currentStreak`;
    const COMPLETED_KEY = `${userId}_completedExercises`;
    const LAST_DATE_KEY = `${userId}_lastWorkoutDate`;

    // Get today's workout
    const workoutPlan = workouts;
    const todaysWorkout = workoutPlan[todayName];

    useEffect(() => {
        const savedStreak = localStorage.getItem(STREAK_KEY);
        if (savedStreak) {
            setCurrentStreak(parseInt(savedStreak, 10));
        }

        const saved = localStorage.getItem(COMPLETED_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.date === new Date().toISOString().split("T")[0]) {
                    setCompletedExercises(new Set(parsed.completed?.exercises || []));
                } else {
                    setCompletedExercises(new Set([]));
                }
            } catch (error) {
                console.error("Error parsing saved exercises:", error);
                setCompletedExercises(new Set([]));
            }
        }
    }, [userId]);

    useEffect(() => {
        if (todaysWorkout) {
            const toStore = {
                date: new Date().toISOString().split("T")[0],
                completed: {
                    type: todaysWorkout.type,
                    exercises: [...completedExercises]
                },
            };
            localStorage.setItem(COMPLETED_KEY, JSON.stringify(toStore));
        }
    }, [completedExercises, todaysWorkout, userId]);

    // Check if workout is completed
    useEffect(() => {
        if (todaysWorkout && completedExercises.size === todaysWorkout.exercises.length) {
            setTodayCompleted(true);
        } else {
            setTodayCompleted(false);
        }
    }, [completedExercises, todaysWorkout]);

    const calculateDuration = (exercises) => {
        const avgTimePerExercise = 3;
        return `${exercises.length * avgTimePerExercise} min`;
    };

    const calculateCalories = (exercises) => {
        const avgCaloriesPerExercise = 10;
        return exercises.length * avgCaloriesPerExercise;
    };

    const SaveWorkout = async () => {
        try {
            if (completedExercises.size === 0) {
                toast.info("Please complete at least one exercise before saving.");
                return;
            }

            const todayDate = new Date().toISOString().split("T")[0];
            const lastDate = localStorage.getItem(LAST_DATE_KEY);
            const savedStreak = parseInt(localStorage.getItem(STREAK_KEY) || "0", 10);

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayDate = yesterday.toISOString().split("T")[0];

            let newStreak = 1;
            if (lastDate === todayDate) {
                newStreak = savedStreak; // Don't increment if already done today
            } else if (lastDate === yesterdayDate) {
                newStreak = savedStreak + 1; // Continue streak
            } else {
                newStreak = 1; // Reset streak
            }

            setCurrentStreak(newStreak);
            localStorage.setItem(STREAK_KEY, newStreak.toString());
            localStorage.setItem(LAST_DATE_KEY, todayDate);

            // Build full workout object
            const workoutData = {
                date: todayDate,
                name: todaysWorkout?.type || 'Unknown Workout',
                duration: calculateDuration([...completedExercises]),
                calories: calculateCalories([...completedExercises]),
                streak: newStreak,
                completed: {
                    type: todaysWorkout?.type || '',
                    exercises: [...completedExercises]
                }
            };

            const res = await SendUserWorkout(workoutData);
            toast.success(res.message);

        } catch (error) {
            console.error("Error saving workout:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    const ResetWorkout = () => {
        if (completedExercises.size === 0) {
            toast.info("No exercises to reset.");
            return;
        }
        toast.success("Workout reset.");
        setCompletedExercises(new Set([]));
        setTodayCompleted(false);
        setCurrentPage(0);
    };

    // Early return if no workout data
    if (!todaysWorkout) {
        return (
            <div className="workout-container">
                <div className="workout-content">
                    <p>No workout scheduled for today.</p>
                </div>
            </div>
        );
    }

    const totalExercises = todaysWorkout.exercises.length;
    const completedCount = completedExercises.size;
    const progressPercentage = (completedCount / totalExercises) * 100;

    // Pagination
    const exercisesPerPage = 3;
    const totalPages = Math.ceil(totalExercises / exercisesPerPage);
    const startIndex = currentPage * exercisesPerPage;
    const currentExercises = todaysWorkout.exercises.slice(startIndex, startIndex + exercisesPerPage);

    const getCategoryColor = (category) => {
        const colors = {
            strength: '#8C7CF0',
            cardio: '#F7C6D9',
            hiit: '#FF6B6B',
            power: '#4ECDC4',
            mobility: '#A7D8F0',
            recovery: '#C6F1D6',
            core: '#F9D8A9',
            endurance: '#E0D8F9',
            mental: '#DDA0DD'
        };
        return colors[category] || '#8C7CF0';
    };

    const toggleExercise = (index) => {
        const actualIndex = startIndex + index;
        const newCompleted = new Set(completedExercises);

        if (newCompleted.has(actualIndex)) {
            newCompleted.delete(actualIndex);
        } else {
            newCompleted.add(actualIndex);
        }

        setCompletedExercises(newCompleted);
        // Note: todayCompleted is now handled by useEffect
    };

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="workout-container">
            <div className="workout-content">
                {/* Header */}
                <button onClick={() => window.location.href = '/dashboard'} className="wt-back-button">
                    <ArrowLeft size={20} /> Back to Dashboard
                </button>

                <div className="workout-header">
                    <div className="workout-header-bg" style={{ background: todaysWorkout.gradient }} />

                    <div className="workout-header-content">
                        <div className="workout-header-top">
                            <div className="workout-title-section">
                                <span className="workout-icon">{todaysWorkout.icon}</span>
                                <div>
                                    <h1 className="workout-title" style={{ background: todaysWorkout.gradient }}>
                                        {todaysWorkout.type}
                                    </h1>
                                    {todaysWorkout.subtitle && (
                                        <p className="workout-subtitle">{todaysWorkout.subtitle}</p>
                                    )}
                                </div>
                            </div>

                            <div className="workout-streak-badge" style={{ background: todaysWorkout.gradient }}>
                                <Flame size={20} />
                                <div className="workout-streak-number">{currentStreak}</div>
                                <div className="workout-streak-label">DAY STREAK</div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="workout-stats-grid">
                            <div className="workout-stat-item">
                                <Calendar size={20} className="workout-stat-icon" />
                                <div className="workout-stat-label">Today</div>
                                <div className="workout-stat-value">{todayName}</div>
                            </div>
                            <div className="workout-stat-item">
                                <Target size={20} className="workout-stat-icon" />
                                <div className="workout-stat-label">Progress</div>
                                <div className="workout-stat-value">{completedCount}/{totalExercises}</div>
                            </div>
                            <div className="workout-stat-item">
                                <Trophy size={20} className={`workout-stat-icon ${todayCompleted ? 'completed' : ''}`} />
                                <div className="workout-stat-label">Status</div>
                                <div className={`workout-stat-value ${todayCompleted ? 'completed' : ''}`}>
                                    {todayCompleted ? 'Complete!' : 'Active'}
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="workout-progress-container">
                            <div className="workout-progress-bar">
                                <div className="workout-progress-fill" style={{ width: `${progressPercentage}%`, background: todaysWorkout.gradient }} />
                            </div>
                            <div className="workout-progress-text">
                                {Math.round(progressPercentage)}% Complete
                            </div>
                        </div>
                    </div>
                </div>

                <div className="workout-tag-container">
                    {todaysWorkout.exercises.map((_, index) => (
                        <span key={index} className={`workout-tag ${completedExercises.has(index) ? 'workout-tag-done' : ''}`}>
                            {index + 1}/{totalExercises}
                        </span>
                    ))}
                </div>

                {/* Exercise Cards */}
                <div className="workout-exercises">
                    {currentExercises.map((exercise, index) => {
                        const actualIndex = startIndex + index;
                        const isCompleted = completedExercises.has(actualIndex);
                        const categoryColor = getCategoryColor(exercise.category);

                        return (
                            <div key={actualIndex} onClick={() => toggleExercise(index)} className={`workout-exercise-card ${isCompleted ? 'completed' : ''}`}>
                                {isCompleted && <div className="workout-exercise-overlay" />}

                                <div className="workout-exercise-content">
                                    <div className={`workout-exercise-checkbox ${isCompleted ? 'completed' : ''}`}>
                                        {isCompleted ?
                                            <CheckCircle size={18} /> :
                                            <Circle size={18} />
                                        }
                                    </div>

                                    <div className="workout-exercise-details">
                                        <div className="workout-exercise-header">
                                            <h3 className={`workout-exercise-name ${isCompleted ? 'completed' : ''}`}>
                                                {exercise.name}
                                            </h3>

                                            <div className="workout-exercise-badges">
                                                <span
                                                    className="workout-category-badge"
                                                    style={{ background: categoryColor }}>
                                                    {exercise.category}
                                                </span>

                                                {(exercise.sets || exercise.duration) && (
                                                    <span className="workout-sets-badge" style={{ background: todaysWorkout.gradient }}>
                                                        {exercise.sets || exercise.duration}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className={`workout-exercise-description ${isCompleted ? 'completed' : ''}`}>
                                            {exercise.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="workout-navigation">
                    <button onClick={goToPrevPage} disabled={currentPage === 0} className={`workout-nav-btn ${currentPage === 0 ? 'disabled' : ''}`} style={currentPage === 0 ? {} : { background: todaysWorkout.gradient }}>
                        <ChevronLeft size={16} /> Previous
                    </button>

                    <div className="workout-page-dots">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <div key={i} className={`workout-page-dot ${i === currentPage ? 'active' : ''}`} />
                        ))}
                    </div>

                    <button onClick={goToNextPage} disabled={currentPage === totalPages - 1} className={`workout-nav-btn ${currentPage === totalPages - 1 ? 'disabled' : ''}`} style={currentPage === totalPages - 1 ? {} : { background: todaysWorkout.gradient }}>
                        Next <ChevronRight size={16} />
                    </button>
                </div>

                {/* Action buttons */}
                <div className="workout-action-btn">
                    <Button onClick={ResetWorkout} className='workout-nav-btn workout-action' style={{ backgroundColor: getCategoryColor(todaysWorkout.exercises[0].category) }}>
                        Reset <Undo size={16} className='ms-1' />
                    </Button>
                    <Button onClick={SaveWorkout} className='workout-nav-btn workout-action' style={{ background: todaysWorkout.gradient }}>
                        Save <CheckCircle size={16} className='ms-1' />
                    </Button>
                </div>

                {/* Completion Celebration */}
                {todayCompleted && (
                    <div className="workout-celebration" style={{ background: todaysWorkout.gradient }}>
                        <div className="workout-celebration-emoji">🎉</div>
                        <h3 className="workout-celebration-title">Workout Complete!</h3>
                        <p className="workout-celebration-text">
                            Amazing work! Your streak is now {currentStreak} days!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkoutTracker;