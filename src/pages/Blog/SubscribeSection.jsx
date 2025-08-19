import React from "react";

export default function SubscribeSection() {
    return (
        <section className="sub-wrapper">
            <div className="sub-container">
                <h2 className="sub-title">Stay Updated with FitFusion </h2>
                <p className="sub-subtitle">
                    Get the latest fitness tips, workout plans, and nutrition advice delivered to your inbox
                </p>
                <div className="sub-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="sub-input"
                    />
                    <button className="sub-btn">Subscribe</button>
                </div>
            </div>
        </section>
    );
}
