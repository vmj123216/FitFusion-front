import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";

const testimonials = [
    {
        name: "Emily Chen",
        role: "Marathon runner transformation",
        avatar: "E",
        text: "FitLife's progressive training helped me complete my first marathon. The community support kept me motivated through every mile of training.",
        stats: [
            { label: "Marathon", value: "26.2 mi" },
            { label: "Training", value: "8 months" },
            { label: "Finish Time", value: "4:15" },
        ],
    },
    {
        name: "John Davis",
        role: "Weight loss journey",
        avatar: "J",
        text: "FitLife completely changed my life. I lost over 30 lbs in just a few months and gained confidence and energy I hadn't felt in years.",
        stats: [
            { label: "Weight Lost", value: "30 lbs" },
            { label: "Duration", value: "5 months" },
            { label: "Support", value: "24/7" },
        ],
    },
    {
        name: "Sara Lin",
        role: "Strength & Mobility",
        avatar: "S",
        text: "Their training plans helped me regain mobility and improve my overall strength. I feel stronger every day!",
        stats: [
            { label: "Sessions", value: "60+" },
            { label: "Progress", value: "95%" },
            { label: "Mobility", value: "Restored" },
        ],
    },
    {
        name: "John Doe",
        role: "BodyBuilding",
        avatar: "J",
        text: "Their training plans helped me regain mobility and improve my overall strength. I feel stronger every day!",
        stats: [
            { label: "Weights", value: "160+" },
            { label: "Progress", value: "95%" },
            { label: "Strengths", value: "Increased" },
        ],
    },
];

const TestimonialCard = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const rotate = (i) => {
        const offset = (i - index + testimonials.length) % testimonials.length;
        const distance =
            offset === 0
                ? 0
                : offset <= testimonials.length / 2
                    ? offset
                    : offset - testimonials.length;
        const scale = distance === 0 ? 1 : 0.85;
        const opacity = distance === 0 ? 1 : 0.4;
        const transform = `rotateY(${distance * 30}deg) scale(${scale}) translateX(${distance * 30}%)`;
        return { transform, opacity, zIndex: distance === 0 ? 2 : 1 };
    };

    return (
        <section id="success-stories" className="testimonial-section">
            <div className="text-center mb-5">
                <h2 className="success-title">What Our Members Say</h2>
                <p className="success-subtitle">Real transformations. Real results.</p>
            </div>
            <div className="testimonial-container">
                <div className="testimonial-carousel">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i} className="testimonial-card" style={rotate(i)}>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">{testimonial.avatar}</div>
                                <div className="testimonial-info">
                                    <h6 className="fw-bold">{testimonial.name}</h6>
                                    <div className="testimonial-role">{testimonial.role}</div>
                                </div>
                            </div>

                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, j) => (
                                    <FaStar key={j} />
                                ))}
                            </div>

                            <p className="testimonial-text">"{testimonial.text}"</p>

                            <div className="testimonial-stats">
                                {testimonial.stats.map((stat, k) => (
                                    <div key={k} className="stat-item">
                                        <div className="stat-value">{stat.value}</div>
                                        <small className="stat-label">{stat.label}</small>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <Button className="testimonial-nav-btn left" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>
                    <LuBicepsFlexed />
                </Button>
                <Button className="testimonial-nav-btn right" onClick={() => setIndex((index + 1) % testimonials.length)}>
                    <LuBicepsFlexed style={{ transform: "rotateY(180deg)" }} />
                </Button>

                {/* Pagination Dots */}
                <div className="testimonial-dots">
                    {testimonials.map((_, i) => (
                        <div key={i} className={`dot ${i === index ? "active" : ""}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCard;
