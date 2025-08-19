import React from "react";
import { useLocation } from "react-router-dom";

import FitFusionHeader from "../pages/FitFusionHeader";
import DashboardHeader from "../pages/DashboardHeader";
import AdminHeader from "../pages/Admin/AdminHeader";

export default function Header() {
    const location = useLocation();
    const path = location.pathname;

    const isAdminRoute = /^\/admin(\/.*)?$/i.test(path);

    const isDashboardRoute = /^\/(dashboard|WorkoutTimerPage|WorkoutPage|setting(s)?(\/.*)?)$/i.test(path);

    if (isAdminRoute) {
        return <AdminHeader />;
    } else if (isDashboardRoute) {
        return <DashboardHeader />;
    } else {
        return <FitFusionHeader />;
    }
}
