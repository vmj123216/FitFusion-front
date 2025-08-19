import React, { memo, useState } from 'react';
import { Modal, Button, Form, ProgressBar } from 'react-bootstrap';
import { Target } from 'lucide-react';
import { userStats } from '../../services/ApiService';
import { toast } from 'react-toastify';

const MeasurementModal = memo(({ show, onHide, onSave }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        weight: '',
        height: '',
        goal: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSave = async () => {
        if (!formData.weight || !formData.height || !formData.goal) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            const response = await userStats(formData.weight, formData.height, formData.goal);
            console.log("User Stats Response:", response);
            toast.success("Measurements saved successfully!");
            if (onSave) onSave(formData);
            onHide();
        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    const fitnessGoals = [
        { value: 'build-muscle', label: '🏋️‍♂️ Build Muscle' },
        { value: 'improve-endurance', label: '🏃‍♀️ Improve Endurance' },
        { value: 'burn-fat', label: '🔥 Burn Fat' },
        { value: 'increase-flexibility', label: '🧘 Increase Flexibility' },
        { value: 'maintain-weight', label: '⚖️ Maintain Weight' },
        { value: 'lose-weight', label: '🎯 Lose Weight' },
        { value: 'gain-weight', label: '📈 Gain Weight' },
        { value: 'improve-focus', label: '🧠 Improve Focus & Discipline' },
        { value: 'enhance-recovery', label: '🛌 Enhance Recovery' },
        { value: 'train-event', label: '🏆 Train for an Event' },
        { value: 'custom', label: '🛠️ Custom...' }
    ];

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <Form.Group>
                        <Form.Label>Enter your Weight (kg)</Form.Label>
                        <Form.Control type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g. 70" />
                    </Form.Group>
                );
            case 2:
                return (
                    <Form.Group>
                        <Form.Label>Enter your Height (cm)</Form.Label>
                        <Form.Control type="number" name="height" value={formData.height} onChange={handleChange} placeholder="e.g. 175" />
                    </Form.Group>
                );
            case 3:
                return (
                    <Form.Group>
                        <Form.Label>Select Your Fitness Goal</Form.Label>
                        <div className="fixed-input-container">
                            <Target size={20} className="fixed-input-icon" />
                            <Form.Select name="goal" value={formData.goal} onChange={handleChange} className={`fixed-form-select ${formData.goal ? 'has-value' : ''}`}>
                                <option value="" disabled hidden>
                                    Select Your Goal
                                </option>
                                {fitnessGoals.map((goal) => (
                                    <option key={goal.value} value={goal.value}>
                                        {goal.label}
                                    </option>
                                ))}
                            </Form.Select>
                            <div className="fixed-select-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </Form.Group>
                );
            default:
                return null;
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header>
                <Modal.Title>Set Your Measurements</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ProgressBar now={(step / 3) * 100} className="mb-3" />
                {renderStep()}
            </Modal.Body>
            <Modal.Footer>
                {step > 1 && (
                    <Button variant="secondary" onClick={prevStep}>
                        Back
                    </Button>
                )}
                {step < 3 ? (
                    <Button
                        variant="primary"
                        style={{ backgroundColor: "var(--primary-accent)" }}
                        onClick={nextStep}
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        variant="success"
                        style={{ backgroundColor: "var(--pastel-3)", color: "var(--text-color)" }}
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
});

export default MeasurementModal;