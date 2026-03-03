/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import AdminDashboard from "./components/AdminDashboard";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import PatientInfoPage from "./pages/PatientInfoPage";
import ContactPage from "./pages/ContactPage";

// Main layout wrapper
function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-text-muted bg-brand-light selection:bg-brand-teal/30 selection:text-brand-navy">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/patient-info" element={<PatientInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
