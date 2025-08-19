import React from "react";
import { Row, Col } from "react-bootstrap";

const LeadershipSection = () => {
    const team = [
        {
            initials: "SJ",
            name: "Sarah Johnson",
            role: "Co-Founder & Head Trainer",
            description: "Certified personal trainer with 12+ years of experience. Specializes in strength training and nutrition coaching.",
            gradient: "linear-gradient(135deg, #c6f7e2, #a0e7ff)" // Mint-Sky
        },
        {
            initials: "MJ",
            name: "Mike Johnson",
            role: "Co-Founder & Operations Director",
            description: "Former professional athlete turned fitness entrepreneur. Passionate about creating exceptional member experiences.",
            gradient: "linear-gradient(135deg, #e1e7ff, #d0d1ff)" // Soft Lavender
        },
        {
            initials: "AR",
            name: "Alex Rodriguez",
            role: "Fitness Program Manager",
            description: "Exercise physiologist and group fitness expert. Designs innovative workout programs for all fitness levels.",
            gradient: "linear-gradient(135deg, #ffe8d6, #ffdac1)" // Peachy Glow
        }
    ];

    return (
        <section className="leadership-team">
            <div className="text-center mb-5">
                <h2 className="leadership-title">Meet Our Leadership Team</h2>
                <p className="section-subtitle">
                    The passionate individuals who make FitFusion a special place
                </p>
            </div>
            <Row className="g-4">
                {team.map((member, index) => (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <div className="team-card">
                            <div className="avatar" style={{ background: member.gradient }}>
                                {member.initials}
                            </div>
                            <h5>{member.name}</h5>
                            <p className="role">{member.role}</p>
                            <p className="desc">{member.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default LeadershipSection;
