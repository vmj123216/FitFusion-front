import React from "react";

export default function OnlineFeatures() {
    const features = [
        {
            number: 1,
            icon: "📱",
            title: "Mobile App Access",
            description:
                "Access workouts, track progress, and connect with your coach through our mobile app."
        },
        {
            number: 2,
            icon: "📝",
            title: "Custom Workout Plans",
            description:
                "Personalized exercise programs tailored to your goals, equipment, and schedule."
        },
        {
            number: 3,
            icon: "🥗",
            title: "Nutrition Guidance",
            description:
                "Meal plans, macro tracking, and nutrition tips adapted to your preferences."
        },
        {
            number: 4,
            icon: "📊",
            title: "Progress Tracking",
            description:
                "Detailed analytics and progress photos to monitor your transformation journey."
        },
        {
            number: 5,
            icon: "💬",
            title: "24/7 Coach Support",
            description:
                "Direct messaging with your coach for questions, motivation, and plan adjustments."
        },
        {
            number: 6,
            icon: "🎥",
            title: "Video Demonstrations",
            description:
                "HD exercise videos with proper form instruction for every movement in your program."
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
                    <h1>Everything You Need to Succeed</h1>
                    <p>
                        Our platform gives you all the tools and support for your fitness journey.
                    </p>
                </div>

                <div className="tp-benefits-grid">
                    {features.map((f, idx) => (
                        <div className="tp-benefit-card" key={idx}>
                            <div className="tp-benefit-number">{f.number}</div>
                            <div className="tp-benefit-icon">{f.icon}</div>
                            <h3 className="tp-benefit-title">{f.title}</h3>
                            <p className="tp-benefit-description">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
