import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">FitFusion</div>
                <p className="footer-text">
                    Empowering your fitness journey with personalized plans and expert guidance.
                </p>

                <nav className="footer-links">
                    <a href="#about">About</a>
                    <a href="#programs">Programs</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="social-icons">
                    <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>

                <p className="footer-copy">© 2025 FitFusion. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
