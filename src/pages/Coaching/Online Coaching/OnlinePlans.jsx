import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function OnlinePlans() {
    const plans = [
        {
            name: "Essential",
            price: "$97",
            detail: "per month",
            features: [
                "Custom workout plan",
                "Basic nutrition guidelines",
                "Mobile app access",
                "Progress tracking tools",
                "Monthly plan updates"
            ],
            button: "Start Essential",
            type: "starter"
        },
        {
            name: "Premium",
            price: "$147",
            detail: "per month",
            features: [
                "Everything in Essential",
                "Detailed meal plans & recipes",
                "Weekly coach check-ins",
                "Form check video reviews",
                "Supplement recommendations",
                "Priority support"
            ],
            button: "Start Premium",
            type: "transformation popular"
        },
        {
            name: "Elite",
            price: "$247",
            detail: "per month",
            features: [
                "Everything in Premium",
                "Bi-weekly video calls",
                "24/7 direct coach messaging",
                "Custom macro calculations",
                "Travel & vacation planning",
                "Unlimited plan adjustments"
            ],
            button: "Start Elite",
            type: "elite"
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
                    <h1>Online Coaching Plans</h1>
                    <p>
                        Get personalized guidance and coaching wherever you are with plans tailored to your needs
                    </p>
                </div>

                <div className="tp-packages-grid">
                    {plans.map((plan, index) => (
                        <div className={`tp-package-card ${plan.type}`} key={index}>
                            <h3 className="tp-package-name">{plan.name}</h3>

                            <div className="tp-price-section">
                                <div className="tp-price">{plan.price}</div>
                                <div className="tp-price-detail">{plan.detail}</div>
                            </div>

                            <ul className="tp-features-list">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>

                            <button className="tp-cta-button">{plan.button}</button>
                        </div>
                    ))}
                </div>

                <div className="tp-guarantee-section">
                    <h3>🌐 14-Day Free Trial</h3>
                    <p>
                        All plans include a risk-free 14-day trial. Cancel anytime if it doesn’t suit your lifestyle.
                    </p>
                </div>
            </div>
        </div>
    );
}
