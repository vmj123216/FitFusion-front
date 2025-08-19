import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
    return (
        <>
            <Header />
            <div style={{ minHeight: "78vh" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
