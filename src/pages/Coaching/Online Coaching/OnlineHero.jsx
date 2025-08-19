import React from "react";
import { Button } from "react-bootstrap";

export default function OnlineHero() {
    return (
        <section className="online-coaching-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-md-6 coaching-content">
                        <h2 className="coaching-title">Online Coaching</h2>
                        <p className="coaching-description">
                            Get expert coaching from anywhere. Personalized programs, nutrition
                            guidance, and 24/7 support.
                        </p>
                        <div className="coaching-buttons mb-3 mb-xxl-3">
                            <Button className="primary-btn mb-2 mb-sm-0">Start Free Trial</Button>
                            <Button className="secondary-btn">Watch Demo</Button>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="col-md-6 coaching-highlight">
                        <div className="highlight-card glass-effect">
                            <span className="highlight-icon">🌍</span>
                            <h4 className="highlight-title">Train Anywhere</h4>
                            <p className="highlight-description">
                                Access your personalized fitness program from home, gym, or
                                anywhere you travel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
