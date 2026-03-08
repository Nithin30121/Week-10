import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ProtectedRoute from "../routes/ProtectedRoute";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Overview from "../pages/dashboard/Overview";
import Activities from "../pages/dashboard/Activities";
import Diet from "../pages/dashboard/Diet";
import Fasting from "../pages/dashboard/Fasting";
import Analytics from "../pages/dashboard/Analytics";
import Settings from "../pages/dashboard/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="activities" element={<Activities />} />
          <Route path="diet" element={<Diet />} />
          <Route path="fasting" element={<Fasting />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
