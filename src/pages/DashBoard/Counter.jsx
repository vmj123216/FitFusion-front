import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Counter() {
    const [happyMembers, setHappyMembers] = useState(0);
    const [workoutPlans, setWorkoutPlans] = useState(0);
    const [expertCoaches, setExpertCoaches] = useState(0);
    const [supportAvailable, setSupportAvailable] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (happyMembers < 10000) setHappyMembers(prev => prev + 100);
            if (workoutPlans < 250) setWorkoutPlans(prev => prev + 5);
            if (expertCoaches < 50) setExpertCoaches(prev => prev + 1);
            if (supportAvailable < 24) setSupportAvailable(prev => prev + 1);
        }, 50);

        if (happyMembers >= 10000 && workoutPlans >= 250 && expertCoaches >= 50 && supportAvailable >= 24) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [happyMembers, workoutPlans, expertCoaches, supportAvailable]);

    return (
        <section className='counter'>
            <Container>
                <div className="counter-main">
                    <Row>
                        <Col className='counter-box' aria-label="Happy Members">
                            <div className='number'>{happyMembers}+</div>
                            <div className='detail'>Happy Members</div>
                        </Col>
                        <Col className='counter-box' aria-label="Workout Plans">
                            <div className='number'>{workoutPlans}+</div>
                            <div className='detail'>Workout Plans</div>
                        </Col>
                        <Col className='counter-box' aria-label="Expert Coaches">
                            <div className='number'>{expertCoaches}+</div>
                            <div className='detail'>Expert Coaches</div>
                        </Col>
                        <Col className='counter-box' aria-label="Support Available">
                            <div className='number'>{supportAvailable}/7</div>
                            <div className='detail'>Support Available</div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
