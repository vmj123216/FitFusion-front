import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HowItWorks() {
    const steps = [
        { number: "1", title: "Free Consultation", desc: "Meet with our team to discuss your goals, assess your current fitness level, and match you with the perfect trainer." },
        { number: "2", title: "Custom Plan Creation", desc: "Your trainer creates a personalized workout and nutrition plan tailored to your specific goals and lifestyle." },
        { number: "3", title: "Start Training", desc: "Begin your personalized training sessions with dedicated one-on-one attention and expert guidance." },
        { number: "4", title: "Track Progress", desc: "Regular assessments and plan adjustments ensure you're always progressing toward your goals." }
    ];

    return (
        <section className="how-it-works py-5">
            <Container className="text-center">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">
                    Your journey to better fitness starts with these simple steps
                </p>

                <Row className="mt-5">
                    {steps.map((step, index) => (
                        <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
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
