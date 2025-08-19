import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/ApiService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter both email and password.");
            return;
        }

        setIsLoading(true);

        try {
            const data = await login(email, password);

            // Safe access to user role with multiple fallback checks
            const userRole = data?.UserStats?.[0]?.user?.role ||
                data?.user?.role ||
                data?.role ||
                'user'; // default to 'user' if no role found

            // Store token first
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // Navigate based on role
            if (userRole === 'admin') {
                toast.success("Login Successful");
                navigate('/admin');
            } else {
                toast.success("Login Successful");
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("Login error:", error);
            if (error?.response?.status === 401) {
                toast.error(error.response.data?.message || "Invalid credentials");
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialLogin = (provider) => {
        toast.info(`${provider} login coming soon!`);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Header */}
                <div className="login-header">
                    <div className="login-icon">
                        <LogIn size={28} color="white" />
                    </div>
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Sign in to continue your fitness journey</p>
                </div>

                <form className="login-form" onSubmit={handleLogin} noValidate>

                    {/* Email */}
                    <div className="login-form-group">
                        <label className="login-form-label" htmlFor="email-input">Email Address</label>
                        <div className={`login-input-container ${focusedField === 'email' ? 'focused' : ''}`}>
                            <Mail size={20} className="login-input-icon" />
                            <input id="email-input" type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} className="login-form-input" aria-label="Email" required />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="login-form-group">
                        <label className="login-form-label" htmlFor="password-input">Password</label>
                        <div className={`login-input-container ${focusedField === 'password' ? 'focused' : ''}`}>
                            <Lock size={20} className="login-input-icon" />
                            <input id="password-input" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField('')} className="login-form-input login-password-input" aria-label="Password" required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="login-password-toggle" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="login-forgot-password-container">
                        <a href="/forgot-password" className="login-forgot-password-link">
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={isLoading} className="login-submit-button" aria-busy={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                {/* Social Login Divider */}
                <div className="login-social-divider">
                    <div className="login-divider-line" />
                    <span className="login-divider-text">or</span>
                    <div className="login-divider-line" />
                </div>

                {/* Social Login Buttons */}
                <div className="login-social-buttons">
                    <button type="button" onClick={() => handleSocialLogin('Google')} className="login-social-button" aria-label="Sign in with Google">
                        📱 Google
                    </button>
                    <button type="button" onClick={() => handleSocialLogin('Facebook')} className="login-social-button" aria-label="Sign in with Facebook">
                        👤 Facebook
                    </button>
                </div>

                {/* Register Link */}
                <div className="login-register-section">
                    <p className="login-register-text">
                        Don't have an account?{' '}
                        <a href="/register" className="login-register-link">
                            Sign up here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}