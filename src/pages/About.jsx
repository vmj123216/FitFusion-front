import React from "react";
import HeroSection from "./About/HeroSection";
import StoryMissionSection from "./About/StoryMissionSection";
import CoreValuesSection from "./About/CoreValuesSection";
import LeadershipSection from "./About/LeadershipSection";
import FacilitiesSection from "./About/FacilitiesSection";
import CallToActionSection from "./About/CallToActionSection";

const About = () => {
    return (
        <div className="about-page">
            <HeroSection />
            <StoryMissionSection />
            <CoreValuesSection />
            <LeadershipSection />
            <FacilitiesSection />
            <CallToActionSection />
        </div>
    );
};

export default About;
