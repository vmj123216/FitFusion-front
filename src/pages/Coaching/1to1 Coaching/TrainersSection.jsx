import React from "react";

export default function TrainersSection() {
    const trainers = [
        {
            badge: "★ Top Rated",
            initials: "SJ",
            name: "Sarah Johnson",
            specialty: "Strength & Conditioning Specialist",
            experience: "12+ years experience • NASM-CPT • Nutrition Certified",
            tags: ["Weight Loss", "Strength", "Powerlifting"],
            button: "Book with Sarah",
        },
        {
            badge: "🏆 Pro Athlete",
            initials: "MJ",
            name: "Mike Johnson",
            specialty: "Athletic Performance Coach",
            experience: "10+ years experience • CSCS • Former Pro Athlete",
            tags: ["Sports Performance", "HIIT", "Agility"],
            button: "Book with Mike",
        },
        {
            badge: "🎯 Specialist",
            initials: "AR",
            name: "Alex Rodriguez",
            specialty: "Functional Movement Specialist",
            experience: "8+ years experience • FMS • Corrective Exercise",
            tags: ["Rehabilitation", "Mobility", "Recovery"],
            button: "Book with Alex",
        },
    ];

    const stats = [
        { number: "500+", label: "Clients Transformed" },
        { number: "30+", label: "Years Combined Experience" },
        { number: "98%", label: "Client Satisfaction Rate" },
        { number: "15+", label: "Certifications Held" },
    ];

    return (
        <section className="tp-trainers-wrapper">
            <div className="tp-floating-elements">
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
                <div className="tp-floating-dot"></div>
            </div>

            <div className="tp-container">
                <div className="tp-header">
                    <h1>Meet Your Personal Trainers</h1>
                    <p>Certified experts dedicated to your success and transformation journey</p>
                </div>

                <div className="tp-trainers-grid">
                    {trainers.map((t, i) => (
                        <div className="tp-trainer-card" key={i}>
                            <div className="tp-achievement-badge">{t.badge}</div>
                            <div className="tp-trainer-avatar">{t.initials}</div>
                            <h3 className="tp-trainer-name">{t.name}</h3>
                            <p className="tp-trainer-specialty">{t.specialty}</p>
                            <p className="tp-trainer-experience">{t.experience}</p>

                            <div className="tp-specialties-tags">
                                {t.tags.map((tag, idx) => (
                                    <span key={idx} className="tp-specialty-tag">{tag}</span>
                                ))}
                            </div>

                            <button className="tp-book-button">{t.button}</button>
                        </div>
                    ))}
                </div>

                <div className="tp-stats-section">
                    {stats.map((s, idx) => (
                        <div className="tp-stat-card" key={idx}>
                            <span className="tp-stat-number">{s.number}</span>
                            <div className="tp-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
