import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaUsers, FaBullseye, FaDumbbell, FaHandsHelping } from "react-icons/fa";

const CoreValuesSection = () => {
    const values = [
        {
            icon: <FaUsers />,
            gradient: "linear-gradient(135deg, #c6f7e2, #a0e7ff)", // Mint-Sky
            title: "Community",
            text: "Building lasting friendships and supporting each other's fitness journeys."
        },
        {
            icon: <FaBullseye />,
            gradient: "linear-gradient(135deg, #e1e7ff, #d0d1ff)", // Lavender
            title: "Excellence",
            text: "Delivering the highest quality training and facilities for optimal results."
        },
        {
            icon: <FaDumbbell />,
            gradient: "linear-gradient(135deg, #ffe8d6, #ffdac1)", // Peach
            title: "Empowerment",
            text: "Helping you discover your inner strength and push beyond your limits."
        },
        {
            icon: <FaHandsHelping />,
            gradient: "linear-gradient(135deg, #d4fc79, #96e6a1)", // Fresh Green
            title: "Inclusivity",
            text: "Welcoming all fitness levels and creating a judgment-free environment."
        }
    ];

    return (
        <section className="core-values">
            <div className="text-center mb-5">
                <h2 className="section-title">Our Core Values</h2>
                <p className="section-subtitle">
                    These principles guide everything we do and shape the FitFusion experience.
                </p>
            </div>
            <Row className="g-4">
                {values.map((value, index) => (
                    <Col key={index} xs={12} sm={6} lg={3}>
                        <div className="value-card">
                            <div className="icon-gradient" style={{ background: value.gradient }}>
                                {value.icon}
                            </div>
                            <h5>{value.title}</h5>
                            <p>{value.text}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default CoreValuesSection;
