import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeroPage() {
    return (
        <section id="dashboard">
            <div className="main">
                <div className="background-image"></div>
                <div className="innerText">
                    <h1 className="neon-outline-title">
                        <span className="neon-outline" data-text="BREAK LIMITS">BREAK LIMITS</span>
                        <span className="neon-fill" aria-hidden="true">BREAK LIMITS</span>
                    </h1>
                </div>
                <Button as={Link} to="/register" className="start-btn">
                    Start Your Journey
                </Button>
            </div>
        </section>
    );
}
