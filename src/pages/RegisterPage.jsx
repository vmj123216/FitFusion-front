import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock, Target, Calendar } from 'lucide-react';
import { Register } from '../services/ApiService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        contact: '',
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age || !formData.gender || !formData.contact || !formData.email || !formData.password) {
            toast.error('Please fill in all fields.');
            return;
        }
        try {
            const response = await Register(formData);
            toast.success('Registration successful!');
            console.log('Registration response:', response);
            navigate('/login');
        } catch (error) {
            console.error("Login error:", error);
            if (error.response) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Something went wrong. Please try again Later.");
            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                {/* Header */}
                <div className="register-header">
                    <div className="register-icon">
                        <Target size={28} color="white" />
                    </div>
                    <h1 className="register-title">Join Your Fitness Journey</h1>
                    <p className="register-subtitle">Create your account to get started</p>
                </div>

                <div className="register-form">

                    {/* Full Name */}
                    <div className="register-form-group">
                        <label className="register-form-label">Full Name</label>
                        <div className={`fixed-input-container ${focusedField === 'name' ? 'focused' : ''}`}>
                            <User size={20} className="fixed-input-icon" />
                            <input type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange('name')} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField('')} className="fixed-form-input" />
                        </div>
                    </div>

                    {/* Age */}
                    <div className="register-form-group">
                        <label className="register-form-label">Age</label>
                        <div className={`fixed-input-container ${focusedField === 'age' ? 'focused' : ''}`}>
                            <Calendar size={20} className="fixed-input-icon" />
                            <input type="number" placeholder="e.g. 25" min="18" max="70" value={formData.age} onChange={handleChange('age')} onFocus={() => setFocusedField('age')} onBlur={() => setFocusedField('')} className="fixed-form-input" />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="register-form-group">
                        <label className="register-form-label">Gender</label>
                        <div className="register-gender-group">
                            {['Male', 'Female', 'Other'].map((gender) => (
                                <label key={gender} className={`register-gender-option ${formData.gender === gender ? 'selected' : ''}`}>
                                    <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange('gender')} className="register-gender-radio" />
                                    {gender}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="register-form-group">
                        <label className="register-form-label">Contact Number</label>
                        <div className={`fixed-input-container ${focusedField === 'contact' ? 'focused' : ''}`}>
                            <Phone size={20} className="fixed-input-icon" />
                            <input type="tel" placeholder="Your mobile number" value={formData.contact} onChange={handleChange('contact')} onFocus={() => setFocusedField('contact')} onBlur={() => setFocusedField('')} className="fixed-form-input" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="register-form-group">
                        <label className="register-form-label">Email Address</label>
                        <div className={`fixed-input-container ${focusedField === 'email' ? 'focused' : ''}`}>
                            <Mail size={20} className="fixed-input-icon" />
                            <input type="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} className="fixed-form-input" />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="register-form-group">
                        <label className="register-form-label">Password</label>
                        <div className={`fixed-input-container ${focusedField === 'password' ? 'focused' : ''}`}>
                            <Lock size={20} className="fixed-input-icon" />
                            <input type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" value={formData.password} onChange={handleChange('password')} onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField('')} className="fixed-form-input fixed-password-input" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="fixed-password-toggle">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" onClick={handleRegister} className="register-submit-button">
                        Create Account
                    </button>
                </div>

                {/* Login Link */}
                <div className="register-login-section">
                    <p className="register-login-text">
                        Already have an account?{' '}
                        <a href="/login" className="register-login-link">
                            Sign in here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
