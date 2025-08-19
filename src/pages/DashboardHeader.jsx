import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, LogOut, Settings } from 'lucide-react';
import getUserData, { Logout } from '../services/ApiService';
import { setUser } from '../../Slice/UserSlice';
import FitnessLoader from './FitnessLoader';

export default function DashboardHeader() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.user);
    const initials = data?.name?.match(/\b\w/g)?.join('').toUpperCase() || 'U';
    const hasShownError = useRef(false);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        setCurrentTime(new Date());
        const userToRedux = async () => {
            try {
                const data = await getUserData();
                dispatch(setUser({
                    user: data.User,
                    userStats: data.stats,
                    workouts: data.workouts || []
                }));
            } catch (error) {
                if (hasShownError.current) return;
                hasShownError.current = true;
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    localStorage.removeItem('token');
                    toast.error("Session expired. Please log in again.");
                    setRedirecting(true);
                    Logout();
                    return navigate('/');
                }
            }
            setRedirecting(false);
        };
        userToRedux();
    }, []);

    if (redirecting) return <FitnessLoader />;

    const handleLogout = async () => {
        try {
            await Logout();
            localStorage.removeItem("token");
            navigate("/");
            window.location.reload();
            toast.error("You Jus Logged Out 🫤");
        } catch (error) {
            if (error) {
                toast.error(error.response?.data?.message);
            }
        }
    };

    return (
        <header className="dashboard-header">
            <div className="header-left" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
                <div className="logo">
                    <h2 className="logo-name">{initials}</h2>
                </div>
                <div>
                    <h1>FitTracker</h1>
                    <p>
                        {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>

            <div className="header-actions">
                <Button><Bell size={20} /></Button>
                <Button onClick={() => navigate('/setting')}><Settings size={20} /></Button>
                <Button onClick={handleLogout}><LogOut size={20} /></Button>
            </div>
        </header>

    );
}
