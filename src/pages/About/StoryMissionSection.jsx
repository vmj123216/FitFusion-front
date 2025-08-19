import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const StoryMissionSection = () => {
    const [activeuser, setActiveUser] = useState(0);
    const [years, setYears] = useState(0);
    const [expert, setExpert] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveUser(prev => (prev < 5000 ? prev + 100 : 5000));
            setYears(prev => (prev < 5 ? prev + 1 : 5));
            setExpert(prev => (prev < 50 ? prev + 1 : 50));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about-wrapper">
            <Container className="about-content">
                <Row className="align-items-center gx-5">
                    {/* Story Section */}
                    <Col lg={12} xl={6} className="mb-5 mb-xl-0">
                        <div className="story">
                            <h2>Our Story</h2>
                            <p>
                                FitFusion started with a simple mission — to make personalized
                                fitness and nutrition accessible to everyone. From a small group
                                of enthusiasts, we’ve grown into a thriving community of thousands,
                                helping people achieve their goals with technology, expertise,
                                and support.
                            </p>
                            <p>
                                What began as a small idea is now a full-featured platform with
                                BMI tracking, meal planning, workout routines, and real-time
                                progress insights to keep you motivated.
                            </p>
                        </div>

                        <Row className="stats text-center mt-4">
                            <Col xs={4}>
                                <span className="highlight">{activeuser}+</span>
                                <div>Active Users</div>
                            </Col>
                            <Col xs={4}>
                                <span className="highlight">{years}+</span>
                                <div>Years Strong</div>
                            </Col>
                            <Col xs={4}>
                                <span className="highlight">{expert}+</span>
                                <div>Expert Coaches</div>
                            </Col>
                        </Row>
                    </Col>

                    {/* Mission Section */}
                    <Col lg={12} xl={6} className="d-flex justify-content-center">
                        <div className="mission glass-card">
                            <div className="emoji">🏋️‍♂️</div>
                            <h3>Our Mission</h3>
                            <p>
                                To empower individuals to achieve their health and fitness goals
                                with expert guidance, cutting-edge tools, and a community that
                                celebrates every milestone, big or small.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StoryMissionSection;
