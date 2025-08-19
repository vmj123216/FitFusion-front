import React from "react";


export default function FeaturedArticle() {

    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <section className="featured-article container mt-lg-4 mb-lg-5">
            <h2 className="text-center section-title mb-lg-5">Featured Article</h2>
            <div className="article-card">
                <div className="article-content">
                    <div className="title-blog">
                        <span className="article-category">💪 Workouts</span>
                        <span className="article-date">{today}</span>
                    </div>
                    <h3 className="article-title">
                        The Ultimate Guide to Building Muscle: Science-Based Strategies for Maximum Growth
                    </h3>
                    <p className="article-description">
                        Discover research-backed methods for building lean muscle mass. From progressive overload
                        principles to optimal nutrition timing, this comprehensive guide covers everything you need
                        to know.
                    </p>
                    <div className="article-author mt-lg-5">
                        <div className="author-avatar">SJ</div>
                        <div>
                            <p className="author-name">Sarah Johnson</p>
                            <p className="author-role">Head Trainer</p>
                        </div>
                        <button className="read-more-btn ms-auto">Read More</button>
                    </div>
                </div>
                <div className="article-image">
                    <img src="/images/bg3.jpg" alt="Workout" />
                </div>
            </div>
        </section>
    );
}
