import React, { useState } from 'react';
import { Shield, Bell, Settings, User, LogOut, Search, Menu, X, ChevronDown, Activity, BarChart3, Calendar, Home } from 'lucide-react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '../../services/ApiService';

function AdminHeader() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [notifications] = useState(3);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await Logout();
            localStorage.removeItem("token");
            navigate("/");
            window.location.reload();
        } catch (error) {
            if (error) {
                toast.error(error.response?.data?.message);
            }
        }
    };
    const handleNotifications = () => {
        toast.info('Notifications panel coming soon!');
    };

    const handleSettings = () => {
        toast.info('Settings panel coming soon!');
    };

    return (
        <header className="admin-header-container">
            {/* Main Header */}
            <div className="admin-header-main">
                {/* Left Section - Logo & Brand */}
                <div className="admin-header-left">
                    <button className="admin-mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link to="/admin" className="admin-brand no-outline">
                        <div className="admin-brand-icon">
                            <Shield size={28} />
                        </div>
                        <div className="admin-brand-text">
                            <h1 className="admin-brand-title">FitFusion</h1>
                            <span className="admin-brand-subtitle">Admin Panel</span>
                        </div>
                    </Link>
                </div>

                {/* Center Section - Navigation (Desktop) */}
                <nav className="admin-nav-desktop">
                    <Link to="/dashboard" className="admin-nav-item" title="Dashboard">
                        <Home size={20} />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="#" className="admin-nav-item" title="Workouts">
                        <Activity size={20} />
                        <span>Workouts</span>
                    </Link>

                    <Link to="#" className="admin-nav-item" title="Analytics">
                        <BarChart3 size={20} />
                        <span>Analytics</span>
                    </Link>

                    <Link to="#" className="admin-nav-item" title="Schedule">
                        <Calendar size={20} />
                        <span>Schedule</span>
                    </Link>
                </nav>

                {/* Right Section - Search & Actions */}
                <div className="admin-header-right">
                    {/* Search Bar */}
                    <div className="admin-search-bar">
                        <Search size={18} />
                        <input type="text" placeholder="Search users, workouts..." />
                    </div>

                    {/* Notifications */}
                    <button className="admin-icon-btn" onClick={handleNotifications} title="Notifications">
                        <Bell size={20} />
                        {notifications > 0 && (<span className="admin-notification-badge">{notifications}</span>)}
                    </button>

                    {/* Settings */}
                    <button className="admin-icon-btn" onClick={handleSettings} title="Settings">
                        <Settings size={20} />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="admin-profile-dropdown">
                        <button className="admin-profile-btn" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                            <div className="admin-profile-avatar">
                                <User size={18} />
                            </div>
                            <div className="admin-profile-info">
                                <span className="admin-profile-name">Admin User</span>
                                <span className="admin-profile-role">Administrator</span>
                            </div>
                            <ChevronDown size={16} className={`admin-chevron ${isProfileOpen ? 'rotated' : ''}`} />
                        </button>

                        {/* Profile Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="admin-dropdown-menu">
                                <button className="admin-dropdown-item">
                                    <User size={16} />
                                    <span>Profile</span>
                                </button>
                                <button className="admin-dropdown-item">
                                    <Settings size={16} />
                                    <span>Settings</span>
                                </button>
                                <hr className="admin-dropdown-divider" />
                                <button className="admin-dropdown-item logout" onClick={handleLogout}>
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="admin-mobile-nav">
                    <button className="admin-mobile-nav-item" onClick={() => { navigate('/dashboard'); setIsMobileMenuOpen(false); }}>
                        <Home size={20} />
                        <span>Dashboard</span>
                    </button>
                    <button className="admin-mobile-nav-item" onClick={() => { navigate('#'); setIsMobileMenuOpen(false); }}>
                        <Activity size={20} />
                        <span>Workouts</span>
                    </button>
                    <button className="admin-mobile-nav-item" onClick={() => { navigate('#'); setIsMobileMenuOpen(false); }}>
                        <BarChart3 size={20} />
                        <span>Analytics</span>
                    </button>
                    <button className="admin-mobile-nav-item" onClick={() => { navigate('#'); setIsMobileMenuOpen(false); }}>
                        <Calendar size={20} />
                        <span>Schedule</span>
                    </button>
                </div>
            )}

            {/* Backdrop for mobile menu */}
            {isMobileMenuOpen && (
                <div className="admin-mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </header>
    );
}

export default AdminHeader;