import React from "react";


const ChooseUs = () => {
    const features = [
        {
            title: "Expert Trainers",
            description:
                "Certified professionals with 10+ years of experience guide you every step of the way.",
            icon: (
                <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="m22 21-3-3m3 3-3-3m3 3 3-3"></path>
                </svg>
            ),
            color: "var(--pastel-1)",
        },
        {
            title: "Personalized Plans",
            description:
                "Custom workout and nutrition plans tailored to your goals, fitness level, and lifestyle.",
            icon: (
                <svg className="icon" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            ),
            color: "var(--pastel-2)",
        },
        {
            title: "24/7 Support",
            description:
                "Round-the-clock assistance from our support team and community of fitness enthusiasts.",
            icon: (
                <svg className="icon" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                    <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                    <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                </svg>
            ),
            color: "var(--pastel-3)",
        },
        {
            title: "Proven Results",
            description:
                "Over 10,000 success stories with an average of 15lbs weight loss in first 3 months.",
            icon: (
                <svg className="icon" viewBox="0 0 24 24">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
            ),
            color: "var(--pastel-4)",
        },
        {
            title: "Flexible Access",
            description:
                "Work out anywhere, anytime with our mobile app and online platform.",
            icon: (
                <svg className="icon" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            color: "var(--pastel-5)",
        },
        {
            title: "Money-Back Guarantee",
            description:
                "Not satisfied within 30 days? Get your money back, no questions asked.",
            icon: (
                <svg className="icon" viewBox="0 0 24 24">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
            color: "var(--primary-accent)",
        },
    ];

    return (
        <section className="whychoose-container">
            <h1 className="whychoose-title">Why Choose FitFusion?</h1>
            <p className="whychoose-subtitle">
                We're not just another fitness platform – we're your partner in
                transformation.
            </p>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div
                            className="icon-container"
                            style={{ background: feature.color }}
                        >
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChooseUs;
    