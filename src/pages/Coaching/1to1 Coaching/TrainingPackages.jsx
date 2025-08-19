import React from "react";

export default function TrainingPackages() {
    const packages = [
        {
            name: "Starter",
            icon: "S",
            price: "$89",
            detail: "per session",
            description: "Perfect for beginners ready to start their fitness journey",
            features: [
                "60-minute personal training session",
                "Basic fitness assessment",
                "Workout plan for session",
                "Form correction and guidance",
                "Goal setting consultation"
            ],
            type: "starter",
            button: "Book Single Session"
        },
        {
            name: "Transformation",
            icon: "T",
            price: "$69",
            detail: "per session (8 sessions)",
            description: "Comprehensive program for serious results and lasting change",
            features: [
                "8 × 60-minute training sessions",
                "Comprehensive fitness assessment",
                "Custom workout & nutrition plan",
                "Progress tracking & adjustments",
                "24/7 trainer support via app",
                "Body composition analysis"
            ],
            type: "transformation popular",
            button: "Start Transformation"
        },
        {
            name: "Elite",
            icon: "E",
            price: "$59",
            detail: "per session (16 sessions)",
            description: "Premium all-inclusive experience for maximum results",
            features: [
                "16 × 60-minute training sessions",
                "Advanced body composition analysis",
                "Personalized meal planning",
                "Monthly progress photos & measurements",
                "Priority booking & scheduling",
                "Supplement recommendations",
                "Exclusive member benefits"
            ],
            type: "elite",
            button: "Go Elite"
        }
    ];

    return (
        <div className="tp-wrapper">
            <div className="tp-floating-elements">
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
            </div>

            <div className="tp-container">
                <div className="tp-header">
                    <h1>Personal Training Packages</h1>
                    <p>
                        Transform your fitness journey with our expert-designed programs
                        tailored to your goals and lifestyle
                    </p>
                </div>

                <div className="tp-packages-grid">
                    {packages.map((pkg, index) => (
                        <div className={`tp-package-card ${pkg.type}`} key={index}>
                            <div className="tp-package-icon">{pkg.icon}</div>
                            <h3 className="tp-package-name">{pkg.name}</h3>
                            <p className="tp-package-description">{pkg.description}</p>

                            <div className="tp-price-section">
                                <div className="tp-price">{pkg.price}</div>
                                <div className="tp-price-detail">{pkg.detail}</div>
                            </div>

                            <ul className="tp-features-list">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>

                            <button className="tp-cta-button">{pkg.button}</button>
                        </div>
                    ))}
                </div>

                <div className="tp-guarantee-section">
                    <h3>💪 100% Satisfaction Guarantee</h3>
                    <p>
                        We're committed to your success. If you're not completely satisfied
                        with your training experience, we'll work with you to make it right
                        or provide a full refund.
                    </p>
                </div>
            </div>
        </div>
    );
}
