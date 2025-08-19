import React, { useState } from "react";

const DailyMealPlanner = () => {
    const [dateOffset, setDateOffset] = useState(0);
    const [meals, setMeals] = useState({
        breakfast: [
            { emoji: "🥣", name: "Overnight Oats", desc: "With blueberries and almonds", calories: 320 },
            { emoji: "🥑", name: "Avocado Toast", desc: "Multigrain bread with herbs", calories: 280 },
            { emoji: "☕", name: "Green Smoothie", desc: "Spinach, banana, and mango", calories: 150 },
        ],
        lunch: [
            { emoji: "🥗", name: "Mediterranean Bowl", desc: "Quinoa, chickpeas, and feta", calories: 450 },
            { emoji: "🍲", name: "Lentil Soup", desc: "With vegetables and herbs", calories: 320 },
            { emoji: "🥤", name: "Sparkling Water", desc: "With fresh lime", calories: 5 },
        ],
        dinner: [
            { emoji: "🐟", name: "Grilled Salmon", desc: "With lemon and dill", calories: 380 },
            { emoji: "🥦", name: "Roasted Vegetables", desc: "Broccoli, carrots, and peppers", calories: 120 },
            { emoji: "🍠", name: "Sweet Potato", desc: "Baked with herbs", calories: 180 },
        ],
    });

    const foodItems = [
        { emoji: "🍎", name: "Apple Slices", desc: "With almond butter", calories: 180 },
        { emoji: "🥜", name: "Mixed Nuts", desc: "Almonds and walnuts", calories: 200 },
        { emoji: "🧀", name: "Greek Yogurt", desc: "With honey and berries", calories: 150 },
        { emoji: "🥕", name: "Carrot Sticks", desc: "With hummus dip", calories: 120 },
        { emoji: "🍌", name: "Banana", desc: "Fresh and ripe", calories: 95 },
        { emoji: "🥤", name: "Protein Shake", desc: "Vanilla flavor", calories: 250 },
    ];

    const addFood = (mealType) => {
        let newItem;
        const existingNames = meals[mealType].map((item) => item.name);

        // Pick a unique item
        do {
            newItem = foodItems[Math.floor(Math.random() * foodItems.length)];
        } while (existingNames.includes(newItem.name) && existingNames.length < foodItems.length);

        setMeals((prev) => ({
            ...prev,
            [mealType]: [...prev[mealType], newItem],
        }));
    };

    const getTotalCalories = () => {
        return Object.values(meals)
            .flat()
            .reduce((acc, item) => acc + item.calories, 0)
            .toLocaleString();
    };

    const getDateText = () => {
        const today = new Date();
        today.setDate(today.getDate() + dateOffset);
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        let dateText = today.toLocaleDateString("en-US", options);

        if (dateOffset === 0) dateText = "Today, " + dateText.split(", ").slice(1).join(", ");
        else if (dateOffset === 1) dateText = "Tomorrow, " + dateText.split(", ").slice(1).join(", ");
        else if (dateOffset === -1) dateText = "Yesterday, " + dateText.split(", ").slice(1).join(", ");

        return dateText;
    };

    return (
        <div className="meal-container">
            <div className="headerMeal">
                <h1>Daily Meal Planner</h1>
                <p>Plan your perfect day of nutrition and wellness</p>
            </div>

            <div className="date-selector">
                <div className="date-nav" onClick={() => setDateOffset(dateOffset - 1)}>‹</div>
                <div className="current-date">{getDateText()}</div>
                <div className="date-nav" onClick={() => setDateOffset(dateOffset + 1)}>›</div>
            </div>

            <div className="meals-grid">
                {Object.entries(meals).map(([mealType, items], idx) => (
                    <div className="meal-card" key={mealType} style={{ "--delay": `${idx * 0.2}s` }}>
                        <div className="meal-header">
                            <div className="meal-icon">
                                {mealType === "breakfast" ? "🌅" : mealType === "lunch" ? "☀️" : "🌙"}
                            </div>
                            <div>
                                <div className="meal-title">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</div>
                                <div className="meal-time">
                                    {mealType === "breakfast"
                                        ? "7:00 - 9:00 AM"
                                        : mealType === "lunch"
                                            ? "12:00 - 2:00 PM"
                                            : "6:00 - 8:00 PM"}
                                </div>
                            </div>
                        </div>

                        <div className="food-items">
                            {items.map((food, i) => (
                                <div className="food-item" key={i} onClick={(e) => {
                                    e.currentTarget.style.transform = "scale(0.95)";
                                    setTimeout(() => { e.currentTarget.style.transform = "scale(1)"; }, 200);
                                }}>
                                    <div className="food-emoji">{food.emoji}</div>
                                    <div className="food-details">
                                        <div className="food-name">{food.name}</div>
                                        <div className="food-desc">{food.desc}</div>
                                    </div>
                                    <div className="calories">{food.calories} cal</div>
                                </div>
                            ))}
                        </div>

                        <button type="button" className="add-food-btn" onClick={() => addFood(mealType)}>
                            <span>+</span> Add Food Item
                        </button>
                    </div>
                ))}
            </div>

            <div className="nutrition-summary">
                <div className="summary-title">Daily Nutrition Summary</div>
                <div className="nutrition-grid">
                    <div className="nutrition-item">
                        <div className="nutrition-value">{getTotalCalories()}</div>
                        <div className="nutrition-label">Calories</div>
                    </div>
                    <div className="nutrition-item">
                        <div className="nutrition-value">95g</div>
                        <div className="nutrition-label">Protein</div>
                    </div>
                    <div className="nutrition-item">
                        <div className="nutrition-value">280g</div>
                        <div className="nutrition-label">Carbs</div>
                    </div>
                    <div className="nutrition-item">
                        <div className="nutrition-value">75g</div>
                        <div className="nutrition-label">Fat</div>
                    </div>
                    <div className="nutrition-item">
                        <div className="nutrition-value">35g</div>
                        <div className="nutrition-label">Fiber</div>
                    </div>
                    <div className="nutrition-item">
                        <div className="nutrition-value">2.1L</div>
                        <div className="nutrition-label">Water</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default DailyMealPlanner;
