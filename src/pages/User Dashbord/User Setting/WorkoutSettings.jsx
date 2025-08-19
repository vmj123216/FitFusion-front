import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const WorkoutSettings = () => {
    const [settings, setSettings] = useState({
        frequency: 3,
        workoutDays: [],
        reminderTime: '08:00',
        enableReminders: false,
        workoutDuration: 30,
        workoutType: 'mixed'
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleDayChange = (day) => {
        const updatedDays = settings.workoutDays.includes(day)
            ? settings.workoutDays.filter(d => d !== day)
            : [...settings.workoutDays, day];

        setSettings({ ...settings, workoutDays: updatedDays });
    };

    const handleSave = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="fs-profile-header mt-lg-4">
                <h1>Workout Settings</h1>
                <p>Set workout frequency and reminders</p>
            </div>

            <div className="ws-container">
                <div className="ws-card">

                    <div className="ws-body">
                        {showSuccess && (<div className="ws-alert">Settings saved successfully! 🎉</div>)}

                        <div className="ws-form-group">
                            <label className="ws-label">
                                Weekly Frequency: {settings.frequency} days
                            </label>
                            <input type="range" min="1" max="7" value={settings.frequency} onChange={(e) => setSettings({ ...settings, frequency: parseInt(e.target.value) })} className="ws-range" />
                            <div className="ws-range-labels">
                                <span>1 day</span>
                                <span>7 days</span>
                            </div>
                        </div>

                        <div className="ws-form-group">
                            <label className="ws-label">Preferred Workout Days</label>
                            <div className="ws-days-grid">
                                {days.map((day) => (
                                    <div key={day} className={`ws-day-chip ${settings.workoutDays.includes(day) ? 'active' : ''}`} onClick={() => handleDayChange(day)}>
                                        {day.substring(0, 3)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="ws-form-group">
                            <label className="ws-label">Workout Duration</label>
                            <select className="ws-select" value={settings.workoutDuration} onChange={(e) => setSettings({ ...settings, workoutDuration: parseInt(e.target.value) })}>
                                <option value={15}>15 minutes</option>
                                <option value={30}>30 minutes</option>
                                <option value={45}>45 minutes</option>
                                <option value={60}>60 minutes</option>
                                <option value={90}>90 minutes</option>
                            </select>
                        </div>

                        <div className="ws-form-group">
                            <label className="ws-label">Workout Type</label>
                            <select className="ws-select" value={settings.workoutType} onChange={(e) => setSettings({ ...settings, workoutType: e.target.value })}>
                                <option value="cardio">Cardio</option>
                                <option value="strength">Strength Training</option>
                                <option value="yoga">Yoga</option>
                                <option value="mixed">Mixed</option>
                            </select>
                        </div>

                        <div className="ws-form-group">
                            <div className="ws-switch-container">
                                <label className="ws-label" style={{ marginBottom: 0 }}>Enable Reminders</label>
                                <label className="ws-switch">
                                    <input type="checkbox" checked={settings.enableReminders} onChange={(e) => setSettings({ ...settings, enableReminders: e.target.checked })} />
                                    <span className="ws-switch-slider"></span>
                                </label>
                            </div>

                            {settings.enableReminders && (
                                <div style={{ marginTop: '1rem' }}>
                                    <label className="ws-label ws-text-muted">Reminder Time</label>
                                    <input type="time" className="ws-input" value={settings.reminderTime} onChange={(e) => setSettings({ ...settings, reminderTime: e.target.value })} />
                                </div>
                            )}
                        </div>

                        <div className="fs-profile-actions">
                            <Button variant="secondary" onClick={() => window.location.href = '/setting'}>Cancel</Button>
                            <Button variant="primary" className="ws-btn" onClick={handleSave}>💾 Save Changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkoutSettings;