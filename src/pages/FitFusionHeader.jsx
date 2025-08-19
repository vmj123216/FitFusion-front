import { LogOut } from 'lucide-react';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { RxDashboard } from 'react-icons/rx';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Logout } from '../services/ApiService';

export default function FitFusionHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const goHome = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    const handleLogout = async () => {
        try {
            await Logout();
            localStorage.removeItem("token");
            navigate("/");
            window.location.reload();
        } catch (error) {
            if (error) {
                toast.error(error.response?.data?.message);
            }
        }
    };
    const dashboard = () => {
        navigate("/dashboard");
        window.location.reload();
    };

    return (
        <Navbar expand="lg" className="fitfusion-navbar py-3 px-2" >
            <Container fluid>
                <Navbar.Brand onClick={goHome} className="brand-text">
                    FitFusion
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto anavbar-toggler" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto nav-links d-flex align-items-center">
                        <Nav.Link onClick={goHome} className={location.pathname === "/" ? "active" : ""}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>
                            About
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection("success-stories")}>Success Stories</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection("ContactUs")}>Contact</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className={location.pathname === "/blog" ? "active" : ""}>
                            Blog
                        </Nav.Link>

                        <NavDropdown title={<span>Coaching</span>} id="nav-dropdown">
                            <NavDropdown.Item as={Link} to="/coaching/1-1">1:1 Coaching</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/coaching/online">Online Coaching</NavDropdown.Item>
                        </NavDropdown>

                        {!isLoggedIn ? (
                            <>
                                <Nav.Link as={Link} to="/register" className={location.pathname === "/register" ? "register-nav custom-nav-active" : "register-nav"}>
                                    Register
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login" className={location.pathname === "/login" ? "login-nav custom-nav-active" : "login-nav"}>
                                    Login
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <div className="header-actions">
                                    <Button onClick={dashboard}><RxDashboard size={20} /></Button>
                                    <Button onClick={handleLogout}><LogOut size={20} /></Button>
                                </div>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
