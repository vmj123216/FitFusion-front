import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const nutritionData = [
    {
        icon: "🥩",
        title: "Protein",
        subtitle: "Build and repair muscles",
        range: "25–30% of calories",
        color: "#ffcccc"
    },
    {
        icon: "🍞",
        title: "Carbohydrates",
        subtitle: "Primary energy source",
        range: "45–65% of calories",
        color: "#fff5b0"
    },
    {
        icon: "🥑",
        title: "Healthy Fats",
        subtitle: "Support hormone production",
        range: "20–35% of calories",
        color: "#ccffcc"
    },
    {
        icon: "💧",
        title: "Hydration",
        subtitle: "Essential for all functions",
        range: "8–10 glasses daily",
        color: "#d6e8ff"
    },
];

const NutritionGuide = () => {
    return (
        <section className="nutrition-section">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="nutrition-title">Nutrition Guide</h2>
                    <p className="section-subtitle">Fuel your body with the right nutrients for optimal performance</p>
                </div>

                <Row className="gy-4">
                    {nutritionData.map((item, index) => (
                        <Col md={6} key={index}>
                            <Card className="nutrition-card glass-card" aria-label={`${item.title} nutrition information`}>
                                <div className="emoji" style={{ fontSize: '2rem' }}>{item.icon}</div>
                                <h5 className="nutri-title">{item.title}</h5>
                                <p className="nutri-sub">{item.subtitle}</p>
                                <div className="nutri-range" style={{ backgroundColor: item.color, padding: '10px', borderRadius: '5px' }}>
                                    {item.range}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default NutritionGuide;
