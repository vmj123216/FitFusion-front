import React from "react";
import { Button } from "react-bootstrap";

export default function BlogHero({ filter, setFilter }) {
    const categories = ["All", "Workouts", "Nutrition", "Wellness", "Success Stories"];

    return (
        <section className="blog-hero text-center">
            <h1 className="blog-title">FitFusion Blog</h1>
            <p className="blog-subtitle">
                Expert fitness tips, nutrition advice, and wellness insights to fuel your journey
            </p>

            <div className="search-box mx-auto">
                <input type="text" placeholder="Search articles..." />
                <span className="search-icon">🔍</span>
            </div>

            {/* Category Buttons */}
            <div className="category-filters pt-lg-4">
                {categories.map((cat) => (
                    <Button key={cat} className={filter === cat ? "active" : ""} onClick={() => setFilter(cat)}>
                        {cat}
                    </Button>
                ))}
            </div>
        </section>
    );
}
