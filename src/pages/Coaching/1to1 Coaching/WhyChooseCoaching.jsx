import React from "react";

export default function WhyChooseCoaching() {
    const benefits = [
        {
            number: 1,
            icon: "🎯",
            title: "Expert Guidance",
            description:
                "Work with certified trainers who understand your unique needs and create personalized strategies for success."
        },
        {
            number: 2,
            icon: "📋",
            title: "Custom Workout Plans",
            description:
                "Every exercise, set, and rep is designed specifically for your goals, fitness level, and preferences."
        },
        {
            number: 3,
            icon: "⚡",
            title: "Faster Results",
            description:
                "Achieve your goals 3x faster with focused attention and accountability from your dedicated trainer."
        },
        {
            number: 4,
            icon: "🛡️",
            title: "Injury Prevention",
            description:
                "Learn proper form and technique to prevent injuries and maximize the effectiveness of every workout."
        },
        {
            number: 5,
            icon: "💪",
            title: "Motivation & Accountability",
            description:
                "Stay motivated with regular check-ins and someone who believes in your potential every step of the way."
        },
        {
            number: 6,
            icon: "📅",
            title: "Flexible Scheduling",
            description:
                "Book sessions that fit your schedule with morning, afternoon, and evening availability."
        }
    ];

    return (
        <div className="tp-wrapper">
            <div className="tp-floating-elements">
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
            </div>

            <div className="tp-container">
                <div className="tp-header">
                    <h1>Why Choose 1:1 Personal Coaching?</h1>
                    <p>
                        Experience the difference that personalized attention and expert
                        guidance can make in your fitness transformation.
                    </p>
                </div>

                <div className="tp-benefits-grid">
                    {benefits.map((b, idx) => (
                        <div className="tp-benefit-card" key={idx}>
                            <div className="tp-benefit-number">{b.number}</div>
                            <div className="tp-benefit-icon">{b.icon}</div>
                            <h3 className="tp-benefit-title">{b.title}</h3>
                            <p className="tp-benefit-description">{b.description}</p>
                        </div>
                    ))}
                </div>

                <div className="tp-cta-section">
                    <h3>Ready to Transform Your Fitness?</h3>
                    <p>
                        Join hundreds of clients who've already experienced the power of
                        personalized 1:1 coaching.
                    </p>
                    <a href="#" className="tp-cta-button1">
                        <span>Start Your Journey</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
