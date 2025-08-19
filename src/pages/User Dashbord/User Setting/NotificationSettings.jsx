import React, { useState } from 'react';
import { Bell, Clock, Target, AlertTriangle, Trophy, Mail, Smartphone, MessageSquare, Moon } from 'lucide-react';

const NotificationSettings = () => {
    const [settings, setSettings] = useState({
        masterToggle: true,
        workoutReminders: {
            enabled: true,
            time: '09:00'
        },
        goalProgress: {
            enabled: true
        },
        missedWorkouts: {
            enabled: true
        },
        achievements: {
            enabled: true
        },
        alertTypes: {
            push: true,
            email: true,
            sms: false
        },
        doNotDisturb: {
            enabled: false,
            startTime: '22:00',
            endTime: '07:00'
        }
    });

    const updateSetting = (category, field, value) => {
        setSettings(prev => ({
            ...prev,
            [category]: typeof prev[category] === 'object'
                ? { ...prev[category], [field]: value }
                : value
        }));
    };

    const handleSave = () => {
        console.log('Saving notification settings:', settings);
    };

    return (
        <>
            <div className="fs-profile-header mt-lg-4">
                <h1>Notification Settings</h1>
                <p>Customize how and when you receive fitness notifications</p>
            </div>

            <div className="fn-notification-settings">
                {/* Master Toggle */}
                <div className="fn-setting-section">
                    <div className="fn-setting-header">
                        <Bell className="fn-setting-icon" />
                        <div>
                            <h3 className="fn-setting-title">Enable/Disable Notifications</h3>
                            <p className="fn-setting-description">Enable or disable all notifications</p>
                        </div>
                        <label className="fn-toggle">
                            <input type="checkbox" checked={settings.masterToggle} onChange={(e) => updateSetting('masterToggle', null, e.target.checked)} />
                            <span className="fn-toggle-slider"></span>
                        </label>
                    </div>
                </div>

                <div className={`fn-settings-content ${!settings.masterToggle ? 'fn-disabled' : ''}`}>

                    {/* Workout Reminders */}
                    <div className="fn-setting-section">
                        <div className="fn-setting-header">
                            <Clock className="fn-setting-icon" />
                            <div>
                                <h3 className="fn-setting-title">Workout Reminders</h3>
                                <p className="fn-setting-description">Get reminded when it's time to exercise</p>
                            </div>
                            <label className="fn-toggle">
                                <input type="checkbox" checked={settings.workoutReminders.enabled} onChange={(e) => updateSetting('workoutReminders', 'enabled', e.target.checked)} disabled={!settings.masterToggle} />
                                <span className="fn-toggle-slider"></span>
                            </label>
                        </div>

                        {settings.workoutReminders.enabled && settings.masterToggle && (
                            <div className="fn-setting-details">
                                <div className="fn-setting-row">
                                    <label className="fn-label">Reminder Time</label>
                                    <input type="time" className="fn-input" value={settings.workoutReminders.time} onChange={(e) => updateSetting('workoutReminders', 'time', e.target.value)} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Goal Progress Updates */}
                    <div className="fn-setting-section">
                        <div className="fn-setting-header">
                            <Target className="fn-setting-icon" />
                            <div>
                                <h3 className="fn-setting-title">Goal Progress Updates</h3>
                                <p className="fn-setting-description">Get notified when you reach goal milestones</p>
                            </div>
                            <label className="fn-toggle">
                                <input type="checkbox" checked={settings.goalProgress.enabled} onChange={(e) => updateSetting('goalProgress', 'enabled', e.target.checked)} disabled={!settings.masterToggle} />
                                <span className="fn-toggle-slider"></span>
                            </label>
                        </div>
                    </div>

                    {/* Missed Workout Alerts */}
                    <div className="fn-setting-section">
                        <div className="fn-setting-header">
                            <AlertTriangle className="fn-setting-icon" />
                            <div>
                                <h3 className="fn-setting-title">Missed Workout Alerts</h3>
                                <p className="fn-setting-description">Get reminded when you skip scheduled workouts</p>
                            </div>
                            <label className="fn-toggle">
                                <input type="checkbox" checked={settings.missedWorkouts.enabled} onChange={(e) => updateSetting('missedWorkouts', 'enabled', e.target.checked)} disabled={!settings.masterToggle} />
                                <span className="fn-toggle-slider"></span>
                            </label>
                        </div>
                    </div>

                    {/* Achievement Notifications */}
                    <div className="fn-setting-section">
                        <div className="fn-setting-header">
                            <Trophy className="fn-setting-icon" />
                            <div>
                                <h3 className="fn-setting-title">Achievement Notifications</h3>
                                <p className="fn-setting-description">Celebrate your fitness milestones</p>
                            </div>
                            <label className="fn-toggle">
                                <input type="checkbox" checked={settings.achievements.enabled} onChange={(e) => updateSetting('achievements', 'enabled', e.target.checked)} disabled={!settings.masterToggle} />
                                <span className="fn-toggle-slider"></span>
                            </label>
                        </div>
                    </div>

                    {/* Alert Types */}
                    <div className="fn-setting-section">
                        <div className="fn-setting-header">
                            <Smartphone className="fn-setting-icon" />
                            <div>
                                <h3 className="fn-setting-title">Alert Types</h3>
                                <p className="fn-setting-description">Choose how you want to receive notifications</p>
                            </div>
                        </div>

                        <div className="fn-setting-details">
                            <div className="fn-alert-types">
                                <label className="fn-alert-type-item">
                                    <Smartphone className="fn-alert-icon" />
                                    <div>
                                        <span className="fn-alert-name">Push Notifications</span>
                                        <span className="fn-alert-desc">In-app notifications</span>
                                    </div>
                                    <label className="fn-toggle">
                                        <input type="checkbox" checked={settings.alertTypes.push} onChange={(e) => updateSetting('alertTypes', 'push', e.target.checked)} disabled={!settings.masterToggle} />
                                        <span className="fn-toggle-slider"></span>
                                    </label>
                                </label>

                                <label className="fn-alert-type-item">
                                    <Mail className="fn-alert-icon" />
                                    <div>
                                        <span className="fn-alert-name">Email</span>
                                        <span className="fn-alert-desc">Email notifications</span>
                                    </div>
                                    <label className="fn-toggle">
                                        <input type="checkbox" checked={settings.alertTypes.email} onChange={(e) => updateSetting('alertTypes', 'email', e.target.checked)} disabled={!settings.masterToggle} />
                                        <span className="fn-toggle-slider"></span>
                                    </label>
                                </label>

                                <label className="fn-alert-type-item">
                                    <MessageSquare className="fn-alert-icon" />
                                    <div>
                                        <span className="fn-alert-name">SMS</span>
                                        <span className="fn-alert-desc">Text messages</span>
                                    </div>
                                    <label className="fn-toggle">
                                        <input type="checkbox" checked={settings.alertTypes.sms} onChange={(e) => updateSetting('alertTypes', 'sms', e.target.checked)} disabled={!settings.masterToggle} />
                                        <span className="fn-toggle-slider"></span>
                                    </label>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Do Not Disturb */}
                    <div className="fn-setting-section">
                        <div className="fn-setting-header">
                            <Moon className="fn-setting-icon" />
                            <div>
                                <h3 className="fn-setting-title">Do Not Disturb</h3>
                                <p className="fn-setting-description">Mute notifications during specific hours</p>
                            </div>
                            <label className="fn-toggle">
                                <input type="checkbox" checked={settings.doNotDisturb.enabled} onChange={(e) => updateSetting('doNotDisturb', 'enabled', e.target.checked)} disabled={!settings.masterToggle} />
                                <span className="fn-toggle-slider"></span>
                            </label>
                        </div>

                        {settings.doNotDisturb.enabled && settings.masterToggle && (
                            <div className="fn-setting-details">
                                <div className="fn-setting-row">
                                    <div className="fn-time-range">
                                        <div>
                                            <label className="fn-label">From</label>
                                            <input type="time" className="fn-input" value={settings.doNotDisturb.startTime} onChange={(e) => updateSetting('doNotDisturb', 'startTime', e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="fn-label">To</label>
                                            <input type="time" className="fn-input" value={settings.doNotDisturb.endTime} onChange={(e) => updateSetting('doNotDisturb', 'endTime', e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Save Button */}
                <div className="fn-settings-footer fs-profile-actions mt-0">
                    <button className="btn btn-secondary" onClick={() => window.location.href = '/setting'}>
                        Cancel
                    </button>
                    <button className="fn-save-btn btn btn-primary" disabled={!settings.masterToggle} onClick={handleSave}>
                        Save Settings
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotificationSettings;