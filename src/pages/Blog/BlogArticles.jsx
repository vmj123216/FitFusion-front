import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const articlesData = [
    {
        id: 1,
        category: "Nutrition",
        title: "Pre and Post-Workout Nutrition: Fuel Your Performance",
        date: "Dec 12, 2024",
        description:
            "Learn the optimal timing and food choices to maximize your workout results and recovery.",
        author: "Alex Rodriguez",
        readTime: "5 min read",
        image: '/images/img1.jpg',
    },
    {
        id: 2,
        category: "Workouts",
        title: "HIIT vs. Steady State: Which Cardio is Right for You?",
        date: "Dec 10, 2024",
        description:
            "Compare the benefits of high-intensity interval training versus traditional steady-state cardio.",
        author: "Mike Johnson",
        readTime: "7 min read",
        image: '/images/img2.jpg',
    },
    {
        id: 3,
        category: "Wellness",
        title: "The Importance of Recovery: Sleep, Stress, and Rest Days",
        date: "Dec 8, 2024",
        description:
            "Why recovery is just as important as your workout routine for achieving your fitness goals.",
        author: "Sarah Johnson",
        readTime: "6 min read",
        image: '/images/img3.jpg',
    },
    {
        id: 4,
        category: "Success Stories",
        title: "Member Spotlight: Jessica’s 50-Pound Weight Loss Journey",
        date: "Dec 5, 2024",
        description:
            "How Jessica transformed her life through consistent training and lifestyle changes.",
        author: "FitCore Team",
        readTime: "4 min read",
        image: '/images/img4.jpg',
    },
    {
        id: 5,
        category: "Workouts",
        title: "Beginner’s Guide to Strength Training: Start Your Journey",
        date: "Dec 3, 2024",
        description:
            "Everything you need to know to start lifting weights safely and effectively as a beginner.",
        author: "Alex Rodriguez",
        readTime: "8 min read",
        image: '/images/img5.jpg',
    },
    {
        id: 6,
        category: "Nutrition",
        title: "Hydration and Performance: How Much Water Do You Really Need?",
        date: "Dec 1, 2024",
        description:
            "The science behind proper hydration and its impact on workout performance and recovery.",
        author: "Mike Johnson",
        readTime: "5 min read",
        image: '/images/img6.jpg',
    },
];

export default function BlogArticles({ filter }) {
    const filteredArticles = filter === "All" ? articlesData : articlesData.filter((a) => a.category === filter);

    return (
        <section className="latest-articles py-lg-5">
            <Container>
                <h2 className="articles-title text-center">Latest Articles</h2>
                <p className="text-center articles-subtitle mb-lg-4">
                    Stay updated with our latest fitness insights and tips
                </p>

                {/* Article Grid */}
                <Row>
                    {filteredArticles.map((article) => (
                        <Col md={4} sm={6} xs={12} key={article.id} className="mb-4">
                            <div className="article-card-grid">
                                {/* Top Section (Image/Emoji) */}
                                <div className="article-top">
                                    <img src={article.image} alt={article.category} className="article-image" />
                                </div>

                                {/* Bottom Section */}
                                <div className="article-body">
                                    <div className="article-meta">
                                        <span className={`article-badge category-${article.category.replace(/\s/g, '')}`}>
                                            {article.category}
                                        </span>
                                        <span className="article-date">{article.date}</span>
                                    </div>
                                    <h5 className="article-title">{article.title}</h5>
                                    <p className="article-description">{article.description}</p>
                                    <div className="article-footer">
                                        <span className="article-author">{article.author}</span>
                                        <span className="article-readtime">{article.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Load More */}
                <div className="text-center mt-4">
                    <Button className="load-more-btn">Load More Articles</Button>
                </div>
            </Container>
        </section >
    );
}
