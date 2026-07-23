import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication
import Login from "./pages/Login/Login";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Settings
import Settings from "./pages/Settings/Settings";

// Home
import Home from "./pages/WebsiteManagement/Home/Home";


import SankalpExam from "./pages/SankalpExam/SankalpExam";

// Home Sections
import HeroSection from "./pages/WebsiteManagement/Home/HeroSeaction/HeroSection";
import Guide from "./pages/WebsiteManagement/Home/Guide/Guide";
import AboutSection from "./pages/WebsiteManagement/Home/AboutSeaction/AboutSeaction";
// import Features from "./pages/WebsiteManagement/Home/Features/Features";
import Footer from "./pages/WebsiteManagement/Home/Footer/Footer";
import Faculty from "./pages/WebsiteManagement/Faculty/Faculty";
import Testimonial from "./pages/WebsiteManagement/Testimonial/Testimonial";
import Topper from "./pages/WebsiteManagement/Topper/Topper";
import Award from "./pages/WebsiteManagement/Award/Award";
import Student from "./pages/StudentRegistration/Student";
import District from "./pages/District/District";
import Taluka from "./pages/Taluka/Taluka";
import ExamCentre from "./pages/ExamCenter/ExamCentre";
import CentreCoordinator from "./pages/CentreCoordinator/CentreCoordinator";
import Service from "./pages/WebsiteManagement/Home/Service/Service";
import CTA from "./pages/WebsiteManagement/Home/CTA/CTA";




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

            <Route path="services" element={<Service/>} />

            <Route path="guide" element={<Guide />} />

            <Route path="about" element={<AboutSection />} />

            <Route path="cta" element={<CTA/>} />

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

          <Route path="courses" element={<div>Courses</div>} />


          <Route path="gallery" element={<div>gallery</div>} />

        </Route>



        {/* ================= Users ================= */}
        <Route path="/users" element={<Dashboard />} />

        {/* ============== Student ================ */}
          <Route path="/students" element={<Dashboard />} />

        {/* ===================== Coordinator=============== */}
          <Route path="/district" element={<Dashboard />}>

    <Route index element={<District/>} />

    <Route
        path=":districtId/taluka"
        element={<Taluka/>}
    />

    <Route
        path=":districtId/taluka/:talukaId/exam-centre"
        element={<ExamCentre/>}
    />

    <Route
        path=":districtId/taluka/:talukaId/exam-centre/:examCentreId/coordinator"
        element={<CentreCoordinator/>}
    />

</Route>

      <Route path="/announcement" element={<Dashboard />} />

          {/* ===============Contact ================ */}
          <Route path="/contact" element={<Dashboard />} />

          {/* ============= School =========== */}
          <Route path="/school" element={<Dashboard />} />


          <Route path="/sankalp-exam" element={<Dashboard />} />




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