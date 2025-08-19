import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from 'react-bootstrap';
import { FaUser, FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserSettings = () => {
    const navigate = useNavigate();
    return (
        <Container fluid className="fs-settings-fluid">

            <button onClick={() => window.location.href = '/dashboard'} className="wt-back-button">
                <ArrowLeft size={20} /> Back to Dashboard
            </button>

            <div className="fs-settings-wrapper">
                <div className="fs-settings-card">
                    <h2 className="fs-settings-title">⚙ User Settings</h2>

                    <div className="fs-settings-list">
                        <div className="fs-settings-row" onClick={() => navigate('/settings/profile')}>
                            <div className="fs-settings-info">
                                <span className="fs-settings-icon"><FaUser /></span>
                                <div>
                                    <h4>Profile Settings</h4>
                                    <p>Manage your name and email</p>
                                </div>
                            </div>
                            <ArrowRight className="fs-settings-arrow" />
                        </div>

                        <div className="fs-settings-row" onClick={() => navigate('/settings/workout')}>
                            <div className="fs-settings-info">
                                <span className="fs-settings-icon"><FaCog /></span>
                                <div>
                                    <h4>Workout Settings</h4>
                                    <p>Set workout frequency and reminders</p>
                                </div>
                            </div>
                            <ArrowRight className="fs-settings-arrow" />
                        </div>

                        <div className="fs-settings-row" onClick={() => navigate('/settings/notifications')}>
                            <div className="fs-settings-info">
                                <span className="fs-settings-icon"><FaBell /></span>
                                <div>
                                    <h4>Notification Settings</h4>
                                    <p>Choose how you want to be notified</p>
                                </div>
                            </div>
                            <ArrowRight className="fs-settings-arrow" />
                        </div>

                        <div className="fs-settings-row" onClick={() => navigate('/settings/account')}>
                            <div className="fs-settings-info">
                                <span className="fs-settings-icon"><FaUser /></span>
                                <div>
                                    <h4>Account Settings</h4>
                                    <p>Change password or delete account</p>
                                </div>
                            </div>
                            <ArrowRight className="fs-settings-arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UserSettings;
