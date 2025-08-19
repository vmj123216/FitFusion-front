import React from "react";

const CallToActionSection = () => {
    return (
        <section className="cta-wrapper">
            <div className="cta-container">
                <h2 className="cta-title">Ready to Start Your Fitness Journey?</h2>
                <p className="cta-subtitle">
                    Join the FitFusion family today and discover what makes us different.
                </p>
                <div className="cta-buttons">
                    <button className="cta-btn primary">Schedule a Tour</button>
                    <button className="cta-btn outline">View Membership Plans</button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
