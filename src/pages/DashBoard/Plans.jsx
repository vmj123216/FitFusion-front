import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Plans() {
    return (
        <section className="programs-section" aria-label="Fitness Programs Section">
            <Container>
                <h3 className="meal-heading text-center pb-5 mb-4" style={{ color: 'var(--text-color)' }}>
                    Fuel Your Fitness Journey
                </h3>
                <Row className="gy-4">
                    <Col md={4}>
                        <div className="program-card" aria-label="Beginner Friendly Program">
                            <div className="emoji" aria-hidden="true">🏃‍♂️</div>
                            <h4>Beginner Friendly</h4>
                            <p className="description">
                                Perfect for those just starting their fitness journey. Low-impact exercises with proper form guidance.
                            </p>
                            <ul>
                                <li>✓ 3 workouts per week</li>
                                <li>✓ 20–30 minutes each</li>
                                <li>✓ No equipment needed</li>
                                <li>✓ Video tutorials included</li>
                            </ul>
                            <Button className="start-btnplan" aria-label="Start Beginner Friendly Program">Start Program</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="program-card highlight-card" aria-label="Intermediate Power Program">
                            <div className="emoji" aria-hidden="true">💪</div>
                            <span className="badge-popular">Most Popular</span>
                            <h4>Intermediate Power</h4>
                            <p className="description">
                                Step up your game with challenging workouts that build strength and endurance.
                            </p>
                            <ul>
                                <li>✓ 4 workouts per week</li>
                                <li>✓ 30–45 minutes each</li>
                                <li>✓ Basic equipment needed</li>
                                <li>✓ Progress tracking</li>
                            </ul>
                            <Button className="start-btnplan" aria-label="Start Intermediate Power Program">Start Program</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="program-card" aria-label="Advanced Elite Program">
                            <div className="emoji" aria-hidden="true">🔥</div>
                            <h4>Advanced Elite</h4>
                            <p className="description">
                                Intense training for serious athletes. Push your limits and achieve peak performance.
                            </p>
                            <ul>
                                <li>✓ 5–6 workouts per week</li>
                                <li>✓ 45–60 minutes each</li>
                                <li>✓ Full gym access needed</li>
                                <li>✓ Personal trainer support</li>
                            </ul>
                            <Button className="start-btnplan" aria-label="Start Advanced Elite Program">Start Program</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
