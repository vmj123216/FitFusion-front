import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroPage from './DashBoard/HeroPage';
import ChooseUs from './DashBoard/ChooseUs';
import Plans from './DashBoard/Plans';
import Bmi from './DashBoard/Bmi';
import NutritionGuide from './DashBoard/NutritionGuide';
import DailyMealPlanner from './DashBoard/DailyMealPlanner';
import Counter from './DashBoard/Counter';
import ContactPage from './DashBoard/ContactPage';
import TestimonialCard from './DashBoard/TestimonialCard';

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const target = document.getElementById(location.state.scrollTo);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 200);
            }
        }
    }, [location]);

    return (
        <>
            {/* Hero Banner */}
            <HeroPage />

            {/* Why Choose Us */}
            <ChooseUs />

            {/* Plans Section */}
            <Plans />

            {/* BMI Calculator */}
            <Bmi />

            {/* Success Stories / Testimonials */}
            <section id="success-stories">
                <TestimonialCard />
            </section>

            {/* Nutrition Guide */}
            <NutritionGuide />

            {/* Daily Meal Planner */}
            <DailyMealPlanner />

            {/* Counter/Stats */}
            <Counter />

            {/* Contact Section */}
            <section id="ContactUs">
                <ContactPage />
            </section>
        </>
    );
};

export default Index;
