// PersonalCoaching.jsx
import React from "react";
import { Button } from "react-bootstrap";

export default function PersonalCoaching() {
    return (
        <section className="personal-coaching-section" style={{ backgroundImage: `url('/images/1to1.jpg')`, }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-md-6 coaching-content">
                        <h2 className="coaching-title">1:1 Personal Coaching</h2>
                        <p className="coaching-description">
                            Get personalized attention, customized workouts, and expert guidance to
                            achieve your fitness goals faster than ever.
                        </p>
                        <div className="coaching-buttons mb-3 mb-xxl-3">
                            <Button className="primary-btn mb-2 mb-lg-0">Book Free Consultation</Button>
                            <Button className="secondary-btn">View Trainers</Button>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="col-md-6 coaching-highlight">
                        <div className="highlight-card glass-effect">
                            <span className="highlight-icon">🎯</span>
                            <h4 className="highlight-title">Personalized Results</h4>
                            <p className="highlight-description">
                                One-on-one attention means faster progress and better results
                                tailored specifically to you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
