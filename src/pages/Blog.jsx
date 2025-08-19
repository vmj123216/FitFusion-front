import React, { useState } from 'react';
import FeaturedArticle from './Blog/FeaturedArticle';
import BlogHero from './Blog/BlogHero';
import BlogArticles from './Blog/BlogArticles';
import SubscribeSection from './Blog/SubscribeSection';

export default function Blog() {

    const [filter, setFilter] = useState("All");

    return (
        <>
            <BlogHero filter={filter} setFilter={setFilter} />
            <BlogArticles filter={filter} />
            <FeaturedArticle />
            <SubscribeSection />
        </>
    );
}
