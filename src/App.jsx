import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import VerticalsPage from "./pages/VerticalsPage";
import ApproachPage from "./pages/ApproachPage";
import LeadershipPage from "./pages/LeadershipPage";
import AssociatesPage from "./pages/AssociatesPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/verticals" element={<VerticalsPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/associates" element={<AssociatesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
