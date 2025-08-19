import React from "react";
import { Row, Col } from "react-bootstrap";

const FacilitiesSection = () => {
    const facilities = [
        { icon: "🏋️‍♂️", color: "#D9F8D4", title: "Strength Training Zone", text: "Premium free weights, Olympic platforms, and cutting-edge strength machines." },
        { icon: "🏃‍♂️", color: "#D6E8FF", title: "Cardio Theater", text: "Latest cardio equipment with entertainment systems and city views." },
        { icon: "🧘‍♀️", color: "#FFE8CC", title: "Mind-Body Studio", text: "Dedicated space for yoga, pilates, and meditation classes." },
        { icon: "🏊‍♂️", color: "#E3F1FF", title: "Aquatic Center", text: "25-meter lap pool and therapeutic hot tub for recovery." },
        { icon: "🍎", color: "#FFF0E1", title: "Nutrition Bar", text: "Fresh smoothies, protein shakes, and healthy meal options." },
        { icon: "👶", color: "#F8E7FF", title: "Kids Zone", text: "Safe, supervised childcare while you focus on your workout." }
    ];

    return (
        <section className="facilities-section">
            <div className="text-center mb-5">
                <h2 className="facilities-title">World-Class Facilities</h2>
                <p className="facilities-subtitle">
                    State-of-the-art equipment and amenities designed for your success.
                </p>
            </div>
            <Row className="g-4">
                {facilities.map((facility, index) => (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <div className="facility-card">
                            <div className="icon-box" style={{ backgroundColor: facility.color }}>
                                <span>{facility.icon}</span>
                            </div>
                            <h4>{facility.title}</h4>
                            <p>{facility.text}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default FacilitiesSection;
