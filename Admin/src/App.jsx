import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication
import Login from "./pages/Login/Login";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Settings
import Settings from "./pages/Settings/Settings";

// Home
import Home from "./pages/WebsiteManagement/Home/Home";

// Home Sections
import HeroSection from "./pages/WebsiteManagement/Home/HeroSeaction/HeroSection";
import Guide from "./pages/WebsiteManagement/Home/Guide/Guide";
import AboutSection from "./pages/WebsiteManagement/Home/AboutSeaction/AboutSeaction";
import Features from "./pages/WebsiteManagement/Home/Features/Features";
import Footer from "./pages/WebsiteManagement/Home/Footer/Footer";
import Faculty from "./pages/WebsiteManagement/Faculty/Faculty";
import Testimonial from "./pages/WebsiteManagement/Testimonial/Testimonial";
import Topper from "./pages/WebsiteManagement/Topper/Topper";
import Award from "./pages/WebsiteManagement/Award/Award";
import Student from "./pages/StudentRegistration/Student";

// Website Pages

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= Login ================= */}
        <Route path="/" element={<Login />} />



        {/* ================= Dashboard ================= */}
        <Route path="/dashboard" element={<Dashboard />} />



        {/* ================= Website Management ================= */}
        <Route path="/website-management" element={<Dashboard />}>

          {/* ---------- Home ---------- */}
          <Route path="home" element={<Home />}>

            <Route path="hero" element={<HeroSection />} />

            {/* <Route path="services" element={<Services />} /> */}

            <Route path="guide" element={<Guide />} />

            <Route path="about" element={<AboutSection />} />

            <Route path="features-contact" element={<Features />} />

            <Route path="footer" element={<Footer />} />

          </Route>



          {/* ---------- Website Pages ---------- */}

          <Route path="faculty" element={<Faculty/>} />

          <Route path="testimonial" element={<Testimonial/>} />

          <Route path="award" element={<Award/>} />

          <Route path="topper" element={<Topper/>} />

          <Route path="answer-key" element={<div>Answer Key</div>} />

          <Route path="exam" element={<div>Exam</div>} />

          <Route path="about" element={<div>About</div>} />

          <Route path="gallery" element={<div>Gallery</div>} />

          <Route path="download" element={<div>Download</div>} />

        </Route>



        {/* ================= Users ================= */}
        <Route path="/users" element={<Dashboard />} />

        {/* ============== Student ================ */}
          <Route path="/students" element={<Dashboard />} />

        {/* ===================== Coordinator=============== */}
          <Route path="/coordinator" element={<Dashboard />} />

          {/* ===============Contact ================ */}
          <Route path="/contact" element={<Dashboard />} />

          {/* ============= School =========== */}
          <Route path="/school" element={<Dashboard />} />




        {/* ================= Settings ================= */}
        <Route path="/settings" element={<Settings />} />



        {/* ================= Test Routes ================= */}
        <Route path="/t1" element={<Dashboard />} />
        <Route path="/t2" element={<Dashboard />} />
        <Route path="/t3" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;