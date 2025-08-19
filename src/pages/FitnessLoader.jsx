import React from "react";

const FitnessLoader = () => {
    return (
        <div className="fitness-loader-overlay">
            <div className="fitness-loader-content">
                <div className="dumbbell-icon">🏋️‍♂️</div>
                <p className="loading-text">Loading your workout...</p>
            </div>
        </div>
    );
};

export default FitnessLoader;
