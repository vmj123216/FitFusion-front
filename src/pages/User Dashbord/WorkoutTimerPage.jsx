import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer, Trophy, Zap, ArrowLeft, Save, CheckCircle, AlertCircle } from 'lucide-react';
import { Container } from 'react-bootstrap';

export default function WorkoutTimerPage() {
    // State variables to manage timer and UI
    const [isActive, setIsActive] = useState(false);          // Tracks whether the workout timer is running
    const [displayTime, setDisplayTime] = useState('00:00');  // Current formatted time shown
    const [workoutSaved, setWorkoutSaved] = useState(false);  // Indicates if workout has been saved
    const [showSaveModal, setShowSaveModal] = useState(false);// Toggles the save modal visibility
    const [workoutType, setWorkoutType] = useState('');       // Selected workout type
    const [customWorkout, setCustomWorkout] = useState('');   // Custom workout name input

    const [isSaving, setIsSaving] = useState(false);          // Loading indicator when saving workout
    const [notification, setNotification] = useState({ show: false, type: '', message: '' }); // Toast notifications

    // Timer references to persist state between renders
    const timerRef = useRef(null);        // Stores setInterval reference
    const startTimeRef = useRef(0);       // Time when workout started (for resume support)
    const elapsedSecondsRef = useRef(0);  // Tracks total elapsed workout time in seconds

    // List of available workout types
    const workoutTypes = [
        { value: 'cardio', label: '🏃‍♀️ Cardio' },
        { value: 'strength', label: '🏋️‍♂️ Weight Training' },
        { value: 'yoga', label: '🧘‍♀️ Yoga' },
        { value: 'hiit', label: '⚡ HIIT' },
        { value: 'pilates', label: '🤸‍♀️ Pilates' },
        { value: 'swimming', label: '🏊‍♀️ Swimming' },
        { value: 'cycling', label: '🚴‍♀️ Cycling' },
        { value: 'custom', label: '🛠️ Custom' }
    ];

    // Format seconds into "HH:MM:SS" or "MM:SS" for display
    const formatTime = useCallback((seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    // Update timer display every second when active
    const updateDisplay = useCallback(() => {
        const currentTime = Date.now();
        const totalSeconds = Math.floor((currentTime - startTimeRef.current) / 1000);
        elapsedSecondsRef.current = totalSeconds;
        setDisplayTime(formatTime(totalSeconds));
    }, [formatTime]);

    // Effect to start/stop the timer interval
    useEffect(() => {
        if (isActive) {
            // Adjust start time to account for paused state
            startTimeRef.current = Date.now() - (elapsedSecondsRef.current * 1000);
            timerRef.current = setInterval(updateDisplay, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        // Cleanup interval on unmount or when isActive changes
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, updateDisplay]);

    // Start or resume the workout timer
    const startWorkout = () => {
        setIsActive(true);
        setWorkoutSaved(false);
    };

    // Pause the workout timer
    const pauseWorkout = () => {
        setIsActive(false);
    };

    // Stop workout and open the save modal if time is recorded
    const stopWorkout = () => {
        setIsActive(false);
        if (elapsedSecondsRef.current > 0) setShowSaveModal(true);
    };

    // Reset all timer and UI states
    const resetWorkout = () => {
        setIsActive(false);
        elapsedSecondsRef.current = 0;
        setDisplayTime('00:00');
        setWorkoutSaved(false);
        setShowSaveModal(false);
        setWorkoutType('');
        setCustomWorkout('');
    };

    // Save workout to database (simulated with timeout)
    const saveWorkoutToMongoDB = async () => {
        // Validate workout type
        if (!workoutType) {
            showNotification('error', "Please select a workout type");
            return;
        }
        if (workoutType === 'custom' && !customWorkout.trim()) {
            showNotification('error', "Please enter custom workout name");
            return;
        }

        setIsSaving(true);

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            showNotification('success', `${displayTime} ${workoutType === 'custom' ? customWorkout : workoutType} workout saved! 🎉`);
            setWorkoutSaved(true);
            setShowSaveModal(false);
        } catch (error) {
            console.error('Error saving workout:', error);
            showNotification('error', "Failed to save workout. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    // Get motivational text based on elapsed workout time
    const getMotivationalMessage = () => {
        const seconds = elapsedSecondsRef.current;
        if (seconds === 0) return "Ready to start your workout? 💪";
        if (seconds < 300) return "Great start! Keep pushing! 🔥";
        if (seconds < 900) return "Fantastic! You're in the zone! ⚡";
        if (seconds < 1800) return "Amazing effort! You're crushing it! 🚀";
        return "Incredible dedication! You're unstoppable! 🏆";
    };

    // Get selected workout label for display
    const getSelectedWorkoutLabel = () => {
        if (workoutType === 'custom') return customWorkout;
        const selected = workoutTypes.find(w => w.value === workoutType);
        return selected ? selected.label : '';
    };

    // Show notification for success/error messages
    const showNotification = (type, message) => {
        setNotification({ show: true, type, message });
        setTimeout(() => setNotification({ show: false, type: '', message: '' }), 4000);
    };

    return (
        <Container>
            <div className="workout-timer-container">
                {/* Toast Notification */}
                {notification.show && (
                    <div className={`notification ${notification.type}`}>
                        {notification.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <span>{notification.message}</span>
                    </div>
                )}

                <div className="workout-timer-content">
                    {/* Back button to Dashboard */}
                    <button onClick={() => window.location.href = '/dashboard'} className="wt-back-button">
                        <ArrowLeft size={20} /> Back to Dashboard
                    </button>

                    {/* Page Header */}
                    <div className="header-section">
                        <div className="header-title-row">
                            <Timer className="header-icon" size={32} />
                            <h1 className="header-title">Workout Timer</h1>
                        </div>
                        <p className="motivational-text">{getMotivationalMessage()}</p>
                    </div>

                    {/* Timer Display and Controls */}
                    <div className="timer-card">
                        <div className="timer-display">
                            {/* Time Display */}
                            <div className={`timer-numbers ${isActive ? 'active' : ''}`}>{displayTime}</div>

                            {/* Status indicator (Active/Paused) */}
                            <div className="status-indicator">
                                <div className={`status-dot ${isActive ? 'active' : ''}`}></div>
                                <span className="status-text">{isActive ? 'Workout Active' : 'Workout Paused'}</span>
                            </div>

                            {/* Timer control buttons */}
                            <div className="control-buttons">
                                {!isActive ? (
                                    <button onClick={startWorkout} className="control-button start">
                                        <Play size={20} /> {elapsedSecondsRef.current === 0 ? 'Start Workout' : 'Resume'}
                                    </button>
                                ) : (
                                    <button onClick={pauseWorkout} className="control-button pause">
                                        <Pause size={20} /> Pause
                                    </button>
                                )}

                                {/* Finish & Save button */}
                                {!isActive && elapsedSecondsRef.current > 0 && (
                                    <button onClick={stopWorkout} className="control-button save">
                                        <Save size={20} /> Finish & Save
                                    </button>
                                )}

                                {/* Reset button */}
                                {elapsedSecondsRef.current > 0 && (
                                    <button onClick={resetWorkout} className="control-button reset">
                                        <RotateCcw size={20} /> Reset
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Save Modal for workout type and confirmation */}
                    {showSaveModal && (
                        <div className="save-modal">
                            <div className="modal-header">
                                <Trophy className="modal-icon" size={40} />
                                <div>
                                    <h3 className="modal-title">Great workout completed!</h3>
                                    <p className="modal-duration">Duration: {displayTime}</p>
                                </div>
                            </div>

                            {/* Workout type selection */}
                            <div className="workout-type-section">
                                <label className="workout-type-label">Workout Type *</label>
                                <div className="workout-type-grid">
                                    {workoutTypes.map((type) => (
                                        <button
                                            key={type.value}
                                            onClick={() => setWorkoutType(type.value)}
                                            className={`workout-type-button ${workoutType === type.value ? 'selected' : ''} ${type.value}`}
                                        >
                                            {type.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Input field for custom workout */}
                                {workoutType === 'custom' && (
                                    <input
                                        type="text"
                                        placeholder="Enter custom workout name..."
                                        value={customWorkout}
                                        onChange={(e) => setCustomWorkout(e.target.value)}
                                        className="custom-workout-input"
                                    />
                                )}
                            </div>

                            {/* Modal action buttons */}
                            <div className="modal-buttons">
                                <button onClick={() => setShowSaveModal(false)} className="modal-button cancel">Cancel</button>
                                <button onClick={saveWorkoutToMongoDB} disabled={isSaving} className="modal-button confirm">
                                    {isSaving ? (
                                        <>
                                            <div className="loading-spinner"></div> Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save size={16} /> Save Workout
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Success message after saving */}
                    {workoutSaved && (
                        <div className="success-message">
                            <Zap className="success-icon" size={24} />
                            <p className="success-text">{getSelectedWorkoutLabel()} workout saved successfully! 🎉</p>
                            <p className="success-duration">Duration: {displayTime}</p>
                        </div>
                    )}

                    {/* Stats Section (Minutes + Status) */}
                    <div className="stats-card">
                        <h3 className="stats-title">Session Stats</h3>
                        <div className="stats-grid">
                            <div className="stat-item minutes">
                                <div className="stat-value minutes-value">{Math.floor(elapsedSecondsRef.current / 60)}</div>
                                <div className="stat-label minutes-label">Minutes</div>
                            </div>
                            <div className="stat-item status">
                                <div className="stat-value status-value">{isActive ? '🔥' : '💪'}</div>
                                <div className="stat-label status-label">{isActive ? 'Active' : 'Ready'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
