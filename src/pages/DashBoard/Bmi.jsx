import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const Bmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        const h = height / 100;
        const bmiValue = (weight / (h * h)).toFixed(1);
        setBmi(bmiValue);

        if (bmiValue < 18.5) setCategory('Underweight');
        else if (bmiValue < 24.9) setCategory('Normal');
        else if (bmiValue < 29.9) setCategory('Overweight');
        else setCategory('Obese');
    };

    return (
        <section className="bmi-section">
            <Container>
                <Card className="glass-card p-4">
                    <h3 className="text-center mb-4">BMI Calculator</h3>
                    <Row>
                        <Col md={6}>
                            <Form onSubmit={calculateBMI}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='70'
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Height (cm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder='177'
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button className="bmi-btn" type="submit">
                                    Calculate BMI
                                </Button>
                            </Form>
                        </Col>

                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                            {bmi !== null ? (
                                <div className="result text-center">
                                    <h3>Your BMI:</h3>
                                    <h1>{bmi}</h1>
                                    <p className={`fs-3 bmi-category ${category.toLowerCase()}`}>{category}</p>
                                </div>
                            ) : (
                                <div className="placeholder-message text-center">
                                    <p className="text-secondary">Enter your weight and height to calculate your BMI.</p>
                                    <p className="text-secondary">It's quick and easy!</p>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    );
};

export default Bmi;
