import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function OnlineHowItWorks() {
    const steps = [
        { number: "1", title: "Complete Assessment", desc: "Fill out our comprehensive questionnaire about your goals, experience, and preferences." },
        { number: "2", title: "Get Matched", desc: "We’ll pair you with a certified coach who specializes in your goals and training style." },
        { number: "3", title: "Receive Your Plan", desc: "Get your workout and nutrition plan delivered to the FitCore app within 48 hours." },
        { number: "4", title: "Start Training", desc: "Begin your program with ongoing support, adjustments, and motivation from your coach." },
    ];

    return (
        <section className="online-how-it-works py-5">
            <Container>
                <h2 className="section-title text-center">How Online Coaching Works</h2>
                <p className="section-subtitle text-center">
                    Get started in minutes and begin your transformation journey
                </p>
                <Row className="mt-5">
                    {steps.map((step, i) => (
                        <Col md={3} sm={6} xs={12} className="mb-5 text-center" key={i}>
                            <div className="step-number">{step.number}</div>
                            <h5 className="step-title">{step.title}</h5>
                            <p className="step-desc">{step.desc}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
