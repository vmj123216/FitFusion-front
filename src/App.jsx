import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Index from './pages/Index';
import Layout from './Layout/Layout';
import ScrollToTop from './services/ScrollToTop';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "./responsive.css"
import "./UserDashboard.css"
import "./pages/Admin/Admin.css";
import "./pages/Admin/adminresponsive.css";
import { useEffect } from 'react';
import Blog from './pages/Blog';
import OnetoOneCoach from './pages/OnetoOneCoach';
import OnlineCoaching from './pages/OnlineCoaching';
import ProtectedRoute from './pages/ProtectedRoute';
import FitnessDashboard from './pages/User Dashbord/FitnessDashboard';
import WorkoutTimerPage from './pages/User Dashbord/WorkoutTimerPage';
import { Provider } from 'react-redux';
import { store } from '../Slice/Store';
import WorkoutTracker from './pages/User Dashbord/WorkoutTracker';
import UserSettings from './pages/User Dashbord/UserSettings';
import Profile from './pages/User Dashbord/User Setting/Profile';
import WorkoutSettings from './pages/User Dashbord/User Setting/WorkoutSettings';
import NotificationSettings from './pages/User Dashbord/User Setting/NotificationSettings';
import AccountSettings from './pages/User Dashbord/User Setting/AccountSettings';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Updateuser from './pages/Admin/Updateuser';
import ViewUser from './pages/Admin/ViewUser';

function App() {
  useEffect(() => {
    const navbar = document.querySelector('.fitfusion-navbar');
    if (!navbar) return;
    const handleScroll = () => {
      const isLargeScreen = window.innerWidth >= 992;
      if (isLargeScreen && window.scrollY > 30) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/coaching/1-1" element={<OnetoOneCoach />} />
              <Route path="/coaching/online" element={<OnlineCoaching />} />
              <Route path="/dashboard" element={<ProtectedRoute> <FitnessDashboard /></ProtectedRoute>} />
              <Route path="/WorkoutTimerPage" element={<ProtectedRoute> <WorkoutTimerPage /></ProtectedRoute>} />
              <Route path="/WorkoutPage" element={<ProtectedRoute> <WorkoutTracker /></ProtectedRoute>} />
              <Route path="/setting" element={<ProtectedRoute> <UserSettings /></ProtectedRoute>} />
              <Route path="/settings/profile" element={<ProtectedRoute> <Profile /></ProtectedRoute>} />
              <Route path="/settings/workout" element={<ProtectedRoute> <WorkoutSettings /></ProtectedRoute>} />
              <Route path="/settings/notifications" element={<ProtectedRoute> <NotificationSettings /></ProtectedRoute>} />
              <Route path="/settings/account" element={<ProtectedRoute> <AccountSettings /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute> <AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/UpdateUser/:id" element={<ProtectedRoute> <Updateuser /></ProtectedRoute>} />
              <Route path="/admin/viewuser/:id" element={<ProtectedRoute> <ViewUser /> </ProtectedRoute>} />
            </Route>
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
