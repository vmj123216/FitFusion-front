import React, { use, useEffect, useState } from 'react';
import { User, Shield, CreditCard, Lock, Download, Trash2, Mail, Eye, EyeOff, Camera, Calendar, Ruler, Weight, Phone, AtSign, Key, Smartphone, Globe, FileText, AlertCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AccountSettings = () => {
    const Navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    const [profile, setProfile] = useState({
        name: "",
        email: '',
        contact: '',
        gender: '',
        goal: '',
        height: '',
        weight: '',
        date: '',
    });

    useEffect(() => {
        if (user) {
            setProfile({
                name: user.user?.name || '',
                email: user.user?.email || '',
                contact: user.user?.contact || '',
                gender: user.user?.gender || '',
                goal: user.goal || '',
                height: user.height ?? '',
                weight: user.weight ?? '',
                date: user.date || '',
            });
        }
    }, [user]);


    const [settings, setSettings] = useState({
        profile: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1 (555) 123-4567',
            profilePicture: null,
            gender: 'male',
            birthdate: '1990-01-15',
            height: '175', // cm
            weight: '70' // kg
        },
        security: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            twoFactorEnabled: false,
            connectedAccounts: {
                google: true,
                apple: false,
                facebook: true
            }
        },
        subscription: {
            currentPlan: 'Premium',
            renewalDate: '2024-12-15',
            paymentMethod: '**** **** **** 1234',
            autoRenewal: true
        },
        privacy: {
            workoutHistoryPublic: false,
            shareDataWithPartners: false,
            allowAnalytics: true,
            showInLeaderboards: true
        },
        notifications: {
            marketingEmails: true,
            securityAlerts: true,
            accountUpdates: true,
            billingNotifications: true
        }
    });

    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const updateSetting = (category, field, value) => {
        setSettings(prev => ({
            ...prev,
            [category]: typeof prev[category] === 'object'
                ? { ...prev[category], [field]: value }
                : value
        }));
    };

    const handlePasswordChange = () => {
        toast.info('🔒 Coming Soon!');
        console.log('Password change requested');
    };

    const handleConnectAccount = (provider) => {
        toast.info('🔒 Coming Soon!');
        console.log(`Connect ${provider} account`);
    };

    const handleDisconnectAccount = (provider) => {
        updateSetting('security', 'connectedAccounts', {
            ...settings.security.connectedAccounts,
            [provider]: false
        });
    };

    const handlePlanUpgrade = () => {
        // Handle plan upgrade logic
        toast.info('🔒 Coming Soon!');

        console.log('Upgrade plan requested');
    };

    const handleUpdatePayment = () => {
        // Handle payment method update
        toast.info('🔒 Coming Soon!');

        console.log('Update payment method requested');
    };

    const handleExportData = () => {
        // Handle data export logic
        toast.info('🔒 Coming Soon!');

        console.log('Export data requested');
    };

    const handleDeleteAccount = () => {
        // Handle account deletion logic
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            console.log('Delete account confirmed');
        }
    };

    const handleSave = () => {
        // Handle save logic here
        toast.success('Account settings saved successfully!');
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log('Saving account settings:', settings);
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <>
            <div className="fs-profile-header mt-lg-4">
                <h1>Account Settings</h1>
                <p>Manage your profile, security, and account preferences</p>
            </div>

            <div className="as-account-settings my-lg-4">
                <div className="as-settings-content">
                    {/* Profile Information */}
                    <div className="as-setting-section">
                        <div className="as-setting-header">
                            <User className="as-setting-icon" />
                            <div>
                                <h3 className="as-setting-title">Profile Information</h3>
                                <p className="as-setting-description">Update your personal details and fitness metrics</p>
                            </div>
                        </div>

                        <div className="as-setting-details">
                            {/* Basic Info */}
                            <div className="as-setting-row">
                                <div className="as-form-grid">
                                    <div>
                                        <label className="as-label">
                                            <AtSign size={16} />Full Name</label>
                                        <input type="text" className="as-input" value={profile.name} readOnly />
                                    </div>
                                    <div>
                                        <label className="as-label">
                                            <Mail size={16} />Email</label>
                                        <input type="email" className="as-input" value={profile.email} readOnly />
                                    </div>
                                </div>
                            </div>

                            <div className="as-setting-row">
                                <div className="as-form-grid">
                                    <div>
                                        <label className="as-label">
                                            <Phone size={16} />Phone Number</label>
                                        <input type="tel" className="as-input" value={profile.contact} readOnly />
                                    </div>
                                    <div>
                                        <label className="as-label">Gender</label>
                                        <input type='text' className="as-select" value={profile.gender} readOnly />
                                    </div>
                                </div>
                            </div>

                            {/* Fitness Metrics */}
                            <div className="as-setting-row">
                                <div className="as-form-grid">
                                    <div>
                                        <label className="as-label">
                                            <Ruler size={16} />Height (cm)</label>
                                        <input type="number" className="as-input" value={profile.height} readOnly />
                                    </div>
                                    <div>
                                        <label className="as-label">
                                            <Weight size={16} />Weight (kg)</label>
                                        <input type="number" className="as-input" value={profile.weight} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button className='fn-save-btn' onClick={() => Navigate("/settings/profile")}>Update Profile</Button>
                            </div>
                        </div>
                    </div>

                    {/* Login & Security */}
                    <div className="as-setting-section">
                        <div className="as-setting-header">
                            <Shield className="as-setting-icon" />
                            <div>
                                <h3 className="as-setting-title">Login & Security</h3>
                                <p className="as-setting-description">Manage your password and security settings</p>
                            </div>
                        </div>

                        <div className="as-setting-details">
                            {/* Change Password */}
                            <div className="as-setting-row">
                                <h4 className="as-subsection-title">Change Password</h4>
                                <div className="as-password-section">
                                    <div className="as-password-field">
                                        <label className="as-label">Current Password</label>
                                        <div className="as-password-input">
                                            <input type={showPasswords.current ? 'text' : 'password'} className="as-input" value={settings.security.currentPassword} onChange={(e) => updateSetting(e.target.value)} />
                                            <button type="button" className="as-password-toggle" onClick={() => togglePasswordVisibility('current')}>
                                                {showPasswords.current ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="as-password-field">
                                        <label className="as-label">New Password</label>
                                        <div className="as-password-input">
                                            <input type={showPasswords.new ? 'text' : 'password'} className="as-input" value={settings.security.newPassword} onChange={(e) => updateSetting(e.target.value)} />
                                            <button type="button" className="as-password-toggle" onClick={() => togglePasswordVisibility('new')}>
                                                {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="as-password-field">
                                        <label className="as-label">Confirm New Password</label>
                                        <div className="as-password-input">
                                            <input type={showPasswords.confirm ? 'text' : 'password'} className="as-input" value={settings.security.confirmPassword} onChange={(e) => updateSetting(e.target.value)} />
                                            <button type="button" className="as-password-toggle" onClick={() => togglePasswordVisibility('confirm')}>
                                                {showPasswords.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>
                                    <button className="as-secondary-btn" onClick={handlePasswordChange}><Key size={16} />Update Password</button>
                                </div>
                            </div>

                            {/* Two-Factor Authentication */}
                            <div className="as-setting-row">
                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <Smartphone className="as-toggle-icon" />
                                        <div>
                                            <h4 className="as-toggle-title">Two-Factor Authentication</h4>
                                            <p className="as-toggle-description">Add extra security to your account</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input
                                            type="checkbox"
                                            checked={settings.security.twoFactorEnabled}
                                            onChange={(e) => updateSetting('security', 'twoFactorEnabled', e.target.checked)}
                                        />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>
                            </div>

                            {/* Connected Accounts */}
                            <div className="as-setting-row">
                                <h4 className="as-subsection-title">Connected Accounts</h4>
                                <div className="as-connected-accounts">
                                    <div className="as-account-item">
                                        <div className="as-account-info">
                                            <div className="as-account-icon as-google">G</div>
                                            <div>
                                                <span className="as-account-name">Google</span>
                                                <span className="as-account-status">
                                                    {settings.security.connectedAccounts.google ? 'Connected' : 'Not connected'}
                                                </span>
                                            </div>
                                        </div>
                                        {settings.security.connectedAccounts.google ? (
                                            <button className="as-disconnect-btn" onClick={() => handleDisconnectAccount('google')}>
                                                Disconnect
                                            </button>
                                        ) : (
                                            <button className="as-connect-btn" onClick={() => handleConnectAccount('google')}>
                                                Connect
                                            </button>
                                        )}
                                    </div>

                                    <div className="as-account-item">
                                        <div className="as-account-info">
                                            <div className="as-account-icon as-apple">🍎</div>
                                            <div>
                                                <span className="as-account-name">Apple</span>
                                                <span className="as-account-status">
                                                    {settings.security.connectedAccounts.apple ? 'Connected' : 'Not connected'}
                                                </span>
                                            </div>
                                        </div>
                                        {settings.security.connectedAccounts.apple ? (
                                            <button className="as-disconnect-btn" onClick={() => handleDisconnectAccount('apple')}>
                                                Disconnect
                                            </button>
                                        ) : (
                                            <button className="as-connect-btn" onClick={() => handleConnectAccount('apple')}>
                                                Connect
                                            </button>
                                        )}
                                    </div>

                                    <div className="as-account-item">
                                        <div className="as-account-info">
                                            <div className="as-account-icon as-facebook">f</div>
                                            <div>
                                                <span className="as-account-name">Facebook</span>
                                                <span className="as-account-status">
                                                    {settings.security.connectedAccounts.facebook ? 'Connected' : 'Not connected'}
                                                </span>
                                            </div>
                                        </div>
                                        {settings.security.connectedAccounts.facebook ? (
                                            <button className="as-disconnect-btn" onClick={() => handleDisconnectAccount('facebook')}>
                                                Disconnect
                                            </button>
                                        ) : (
                                            <button className="as-connect-btn" onClick={() => handleConnectAccount('facebook')}>
                                                Connect
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subscription & Billing */}
                    <div className="as-setting-section">
                        <div className="as-setting-header">
                            <CreditCard className="as-setting-icon" />
                            <div>
                                <h3 className="as-setting-title">Subscription & Billing</h3>
                                <p className="as-setting-description">Manage your subscription and payment details</p>
                            </div>
                        </div>

                        <div className="as-setting-details">
                            <div className="as-subscription-info">
                                <div className="as-current-plan">
                                    <h4 className="as-plan-title">Current Plan: {settings.subscription.currentPlan}</h4>
                                    <p className="as-plan-renewal">Renews on {settings.subscription.renewalDate}</p>
                                    <div className="as-plan-actions">
                                        <button className="as-secondary-btn" onClick={handlePlanUpgrade}>
                                            Upgrade Plan
                                        </button>
                                    </div>
                                </div>

                                <div className="as-payment-method">
                                    <h4 className="as-subsection-title">Payment Method</h4>
                                    <div className="as-payment-info">
                                        <CreditCard size={20} />
                                        <span>{settings.subscription.paymentMethod}</span>
                                        <button className="as-secondary-btn" onClick={handleUpdatePayment}>
                                            Update
                                        </button>
                                    </div>
                                </div>

                                <div className="as-auto-renewal">
                                    <div className="as-toggle-setting">
                                        <div className="as-toggle-info">
                                            <div>
                                                <h4 className="as-toggle-title">Auto Renewal</h4>
                                                <p className="as-toggle-description">Automatically renew subscription</p>
                                            </div>
                                        </div>
                                        <label className="as-toggle">
                                            <input
                                                type="checkbox"
                                                checked={settings.subscription.autoRenewal}
                                                onChange={(e) => updateSetting('subscription', 'autoRenewal', e.target.checked)}
                                            />
                                            <span className="as-toggle-slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Controls */}
                    <div className="as-setting-section">
                        <div className="as-setting-header">
                            <Lock className="as-setting-icon" />
                            <div>
                                <h3 className="as-setting-title">Privacy Controls</h3>
                                <p className="as-setting-description">Control your data visibility and sharing preferences</p>
                            </div>
                        </div>

                        <div className="as-setting-details">
                            <div className="as-privacy-settings">
                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Public Workout History</h4>
                                            <p className="as-toggle-description">Allow others to see your workout history</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input
                                            type="checkbox"
                                            checked={settings.privacy.workoutHistoryPublic}
                                            onChange={(e) => updateSetting('privacy', 'workoutHistoryPublic', e.target.checked)}
                                        />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Data Sharing with Partners</h4>
                                            <p className="as-toggle-description">Share anonymized data with fitness partners</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.privacy.shareDataWithPartners} onChange={(e) => updateSetting('privacy', 'shareDataWithPartners', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Analytics & Improvements</h4>
                                            <p className="as-toggle-description">Help improve the app with usage analytics</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.privacy.allowAnalytics} onChange={(e) => updateSetting('privacy', 'allowAnalytics', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Show in Leaderboards</h4>
                                            <p className="as-toggle-description">Appear in community leaderboards and challenges</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.privacy.showInLeaderboards} onChange={(e) => updateSetting('privacy', 'showInLeaderboards', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Management */}
                    <div className="as-setting-section">
                        <div className="as-setting-header">
                            <FileText className="as-setting-icon" />
                            <div>
                                <h3 className="as-setting-title">Data Management</h3>
                                <p className="as-setting-description">Export or delete your account data</p>
                            </div>
                        </div>

                        <div className="as-setting-details">
                            <div className="as-data-actions">
                                <div className="as-data-action-item">
                                    <div className="as-data-action-info">
                                        <Download className="as-data-action-icon" />
                                        <div>
                                            <h4 className="as-data-action-title">Export Your Data</h4>
                                            <p className="as-data-action-description">Download all your workout history and personal data</p>
                                        </div>
                                    </div>
                                    <button className="as-secondary-btn" onClick={handleExportData}><Download size={16} />Export Data</button>
                                </div>

                                <div className="as-data-action-item as-danger">
                                    <div className="as-data-action-info">
                                        <Trash2 className="as-data-action-icon" />
                                        <div>
                                            <h4 className="as-data-action-title">Delete Account</h4>
                                            <p className="as-data-action-description">Permanently delete your account and all data</p>
                                        </div>
                                    </div>
                                    <button className="as-danger-btn" onClick={handleDeleteAccount}><Trash2 size={16} />Delete Account</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Notifications */}
                    <div className="as-setting-section">
                        <div className="as-setting-header">
                            <Mail className="as-setting-icon" />
                            <div>
                                <h3 className="as-setting-title">Account Notifications</h3>
                                <p className="as-setting-description">Manage email notifications related to your account</p>
                            </div>
                        </div>

                        <div className="as-setting-details">
                            <div className="as-notification-settings">
                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Marketing Emails</h4>
                                            <p className="as-toggle-description">Receive promotional emails and newsletters</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.notifications.marketingEmails} onChange={(e) => updateSetting('notifications', 'marketingEmails', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <AlertCircle className="as-toggle-icon" />
                                        <div>
                                            <h4 className="as-toggle-title">Security Alerts</h4>
                                            <p className="as-toggle-description">Important security notifications (recommended)</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.notifications.securityAlerts} onChange={(e) => updateSetting('notifications', 'securityAlerts', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Account Updates</h4>
                                            <p className="as-toggle-description">Profile changes and account modifications</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.notifications.accountUpdates} onChange={(e) => updateSetting('notifications', 'accountUpdates', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="as-toggle-setting">
                                    <div className="as-toggle-info">
                                        <div>
                                            <h4 className="as-toggle-title">Billing Notifications</h4>
                                            <p className="as-toggle-description">Payment receipts and subscription updates</p>
                                        </div>
                                    </div>
                                    <label className="as-toggle">
                                        <input type="checkbox" checked={settings.notifications.billingNotifications} onChange={(e) => updateSetting('notifications', 'billingNotifications', e.target.checked)} />
                                        <span className="as-toggle-slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Save Button */}
                <div className="as-settings-footer">
                    <button className="as-save-btn" onClick={handleSave}>Save Changes</button>
                </div>
            </div>
        </>

    );
};

export default AccountSettings;