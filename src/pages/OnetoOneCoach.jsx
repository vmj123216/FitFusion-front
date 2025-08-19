import React from 'react'
import PersonalCoaching from './Coaching/1to1 Coaching/PersonalCoaching'
import WhyChooseCoaching from './Coaching/1to1 Coaching/WhyChooseCoaching'
import HowItWorks from './Coaching/1to1 Coaching/HowItWorks'
import TrainingPackages from './Coaching/1to1 Coaching/TrainingPackages'
import TrainersSection from './Coaching/1to1 Coaching/TrainersSection'

export default function OnetoOneCoach() {
    return (
        <>

            <PersonalCoaching />

            <WhyChooseCoaching />

            <HowItWorks />

            <TrainingPackages />

            <TrainersSection />
        </>
    )
}
