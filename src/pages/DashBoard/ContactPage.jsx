import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            setAlertMessage('Please fill in all fields.');
            setAlertVariant('danger');
            setShowAlert(true);
            return;
        }

        // Simulate a successful submission
        setAlertMessage('Your message has been sent successfully!');
        setAlertVariant('success');
        setShowAlert(true);

        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="contact-section py-5" id='ContactUs'>
            <Container>
                <h2 className="text-center mb-3">Get In Touch</h2>
                <p className="text-center mb-5">Ready to start your fitness journey? We're here to help!</p>
                <Row>
                    <Col md={5}>
                        <div className="contact-info-section">
                            <div className="contact-info-title">Contact Information</div>

                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div className="contact-details">
                                    <div className="contact-label">Address</div>
                                    <div className="contact-text">123 Fitness Street, Health City, HC 12345</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div className="contact-details">
                                    <div className="contact-label">Phone</div>
                                    <div className="contact-text">+1 (555) 123-4567</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div className="contact-details">
                                    <div className="contact-label">Email</div>
                                    <div className="contact-text">info@fitlife.com</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">⏰</span>
                                <div className="contact-details">
                                    <div className="contact-label">Hours</div>
                                    <div className="contact-text">Mon–Fri: 6AM–10PM<br />Sat–Sun: 8AM–8PM</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={7}>
                        <div className="glass-card p-4">
                            <h5 className="mb-3">Send us a message</h5>
                            {showAlert && (
                                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                                    {alertMessage}
                                </Alert>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Tell us about your fitness goals..." value={message} onChange={(e) => setMessage(e.target.value)} required />
                                </Form.Group>

                                <Button type="submit" className="w-100 contact-btn">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactPage;
