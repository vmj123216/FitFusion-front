export const workouts = {
    Sunday: {
        type: 'Rest & Mobility',
        color: 'var(--pastel-1)',
        gradient: 'linear-gradient(135deg, #A7D8F0, #87CEEB)',
        icon: '🧘‍♀️',
        exercises: [
            { name: 'Light stretching', duration: '10 mins', description: 'Full body gentle stretches', category: 'mobility' },
            { name: 'Foam rolling', duration: '8 mins', description: 'Focus on tight areas', category: 'recovery' },
            { name: 'Meditation', duration: '5 mins', description: 'Mindfulness practice', category: 'mental' },
            { name: 'Walk', duration: '20 mins', description: 'Easy pace outdoor walk', category: 'cardio' }
        ]
    },
    Monday: {
        type: 'Push Day',
        color: 'var(--pastel-2)',
        gradient: 'linear-gradient(135deg, #fbcd8cff, #f7ad7bff)',
        icon: '💪',
        subtitle: 'Chest, Shoulders, Triceps',
        exercises: [
            { name: 'Push-ups', sets: '3x12-15', description: 'Standard or modified on knees', category: 'strength' },
            { name: 'Pike push-ups', sets: '3x8-12', description: 'Targets shoulders', category: 'strength' },
            { name: 'Tricep dips', sets: '3x10-15', description: 'Use chair or couch', category: 'strength' },
            { name: 'Wall handstand hold', duration: '3x30s', description: 'Build shoulder strength', category: 'strength' },
            { name: 'Diamond push-ups', sets: '2x8-12', description: 'Tricep focused', category: 'strength' },
            { name: 'Shoulder circles', sets: '2x15 each', description: 'Forward and backward', category: 'mobility' },
            { name: 'Arm circles', duration: '2x30s', description: 'Small and large circles', category: 'warmup' },
            { name: 'Plank to downward dog', sets: '3x10', description: 'Dynamic movement', category: 'strength' },
            { name: 'Incline push-ups', sets: '2x12-15', description: 'Use stairs or couch', category: 'strength' },
            { name: 'Tricep stretch', duration: '30s each', description: 'Hold behind head', category: 'mobility' }
        ]
    },
    Tuesday: {
        type: 'Pull Day',
        color: 'var(--pastel-3)',
        gradient: 'linear-gradient(135deg, #C6F1D6, #A8E6A3)',
        icon: '🎯',
        subtitle: 'Back, Biceps',
        exercises: [
            { name: 'Pull-ups/Chin-ups', sets: '3x5-10', description: 'Use bar or resistance band', category: 'strength' },
            { name: 'Inverted rows', sets: '3x8-12', description: 'Under table or with towel', category: 'strength' },
            { name: 'Superman', sets: '3x12-15', description: 'Strengthen lower back', category: 'strength' },
            { name: 'Reverse flies', sets: '3x12', description: 'Use water bottles as weights', category: 'strength' },
            { name: 'Bicep curls', sets: '3x12-15', description: 'Use backpack or water bottles', category: 'strength' },
            { name: 'Face pulls', sets: '3x15', description: 'With resistance band', category: 'strength' },
            { name: 'Dead hangs', duration: '3x20-30s', description: 'Hang from bar', category: 'strength' },
            { name: 'Prone Y-raises', sets: '2x12', description: 'Lying face down', category: 'strength' },
            { name: 'Band pull-aparts', sets: '2x15', description: 'Chest level pulls', category: 'strength' },
            { name: 'Cat-cow stretch', sets: '10 reps', description: 'Spinal mobility', category: 'mobility' },
            { name: 'Child\'s pose', duration: '30s', description: 'Back and shoulder stretch', category: 'mobility' }
        ]
    },
    Wednesday: {
        type: 'Legs & Glutes',
        color: 'var(--pastel-4)',
        gradient: 'linear-gradient(135deg, #F7C6D9, #F1A7C1)',
        icon: '🦵',
        subtitle: 'Lower Body Power',
        exercises: [
            { name: 'Squats', sets: '3x15-20', description: 'Bodyweight or goblet', category: 'strength' },
            { name: 'Lunges', sets: '3x12 each', description: 'Forward, reverse, or walking', category: 'strength' },
            { name: 'Single-leg deadlifts', sets: '3x10 each', description: 'Balance and hamstrings', category: 'strength' },
            { name: 'Glute bridges', sets: '3x15-20', description: 'Squeeze at the top', category: 'strength' },
            { name: 'Wall sits', duration: '3x45s', description: 'Back against wall', category: 'endurance' },
            { name: 'Calf raises', sets: '3x20', description: 'Single or double leg', category: 'strength' },
            { name: 'Side lunges', sets: '2x12 each', description: 'Lateral movement', category: 'strength' },
            { name: 'Jump squats', sets: '3x8-12', description: 'Explosive power', category: 'power' },
            { name: 'Step-ups', sets: '2x12 each', description: 'Use chair or step', category: 'strength' },
            { name: 'Fire hydrants', sets: '2x15 each', description: 'On hands and knees', category: 'strength' },
            { name: 'Leg swings', sets: '10 each', description: 'Dynamic warm-up/cool-down', category: 'mobility' },
            { name: 'Hip flexor stretch', duration: '30s each', description: 'Deep lunge position', category: 'mobility' }
        ]
    },
    Thursday: {
        type: 'Cardio & HIIT',
        color: 'var(--primary-accent)',
        gradient: 'linear-gradient(135deg, #8C7CF0, #6B5DD8)',
        icon: '🔥',
        subtitle: 'High Intensity Training',
        exercises: [
            { name: 'Jumping jacks', duration: '3x45s', description: 'Full body cardio', category: 'cardio' },
            { name: 'High knees', duration: '3x30s', description: 'In place running motion', category: 'cardio' },
            { name: 'Burpees', sets: '3x5-8', description: 'Full body explosive', category: 'hiit' },
            { name: 'Mountain climbers', duration: '3x30s', description: 'Plank position', category: 'cardio' },
            { name: 'Butt kickers', duration: '2x30s', description: 'Heel to glute', category: 'cardio' },
            { name: 'Squat jumps', sets: '3x10', description: 'Land softly', category: 'power' },
            { name: 'Plank jacks', duration: '3x30s', description: 'Jumping jack in plank', category: 'cardio' },
            { name: 'Cross-body climbers', duration: '2x30s', description: 'Knee to opposite elbow', category: 'cardio' },
            { name: 'Tuck jumps', sets: '2x8', description: 'Knees to chest', category: 'power' },
            { name: 'Sprint intervals', duration: '5x20s', description: 'In place or running', category: 'hiit' },
            { name: 'Rest between intervals', duration: '40s', description: 'Active recovery', category: 'recovery' },
            { name: 'Cool down walk', duration: '5 mins', description: 'Slow pace', category: 'recovery' },
            { name: 'Dynamic stretching', duration: '5 mins', description: 'Leg swings, arm circles', category: 'mobility' }
        ]
    },
    Friday: {
        type: 'Full Body Circuit',
        color: 'var(--pastel-2)',
        gradient: 'linear-gradient(135deg, #f6d19dff, #f4b183ff)',
        icon: '⚡',
        subtitle: 'Complete Body Workout',
        exercises: [
            { name: 'Push-up to T', sets: '3x8 each', description: 'Rotate to side plank', category: 'strength' },
            { name: 'Squat to overhead reach', sets: '3x12', description: 'Arms up at top', category: 'strength' },
            { name: 'Reverse lunge with twist', sets: '3x10 each', description: 'Rotate toward front leg', category: 'strength' },
            { name: 'Plank up-downs', sets: '3x8', description: 'Plank to forearm plank', category: 'strength' },
            { name: 'Bear crawl', duration: '3x30s', description: 'Forward and backward', category: 'strength' },
            { name: 'Turkish get-ups', sets: '2x5 each', description: 'Use light weight', category: 'strength' },
            { name: 'Renegade rows', sets: '3x8 each', description: 'Plank position rows', category: 'strength' },
            { name: 'Lateral bounds', sets: '2x10 each', description: 'Side to side jumps', category: 'power' },
            { name: 'Inchworms', sets: '2x8', description: 'Walk hands out to plank', category: 'strength' },
            { name: 'Dead bug', sets: '2x10 each', description: 'Core stability', category: 'core' },
            { name: 'Bird dog', sets: '2x10 each', description: 'Opposite arm/leg', category: 'core' },
            { name: 'Full body stretch', duration: '5 mins', description: 'Hold each stretch 30s', category: 'mobility' }
        ]
    },
    Saturday: {
        type: 'Active Recovery',
        color: 'var(--pastel-5)',
        gradient: 'linear-gradient(135deg, #cbbbfcff, #bb97ffff)',
        icon: '🌸',
        subtitle: 'Gentle Movement',
        exercises: [
            { name: 'Easy walk', duration: '30 mins', description: 'Comfortable pace', category: 'cardio' },
            { name: 'Yoga flow', duration: '15 mins', description: 'Sun salutations', category: 'mobility' },
            { name: 'Hip circles', sets: '10 each', description: 'Standing hip mobility', category: 'mobility' },
            { name: 'Ankle rolls', sets: '10 each', description: 'Both directions', category: 'mobility' },
            { name: 'Neck rolls', sets: '5 each', description: 'Gentle and slow', category: 'mobility' },
            { name: 'Shoulder blade squeezes', sets: '15 reps', description: 'Improve posture', category: 'mobility' },
            { name: 'Deep breathing', duration: '5 mins', description: 'Relaxation focus', category: 'mental' }
        ]
    }
};