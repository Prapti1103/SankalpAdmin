import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";

// Home
import Home from "./pages/WebsiteManagement/Home/Home";

// Home Sections
import HeroSection from "./pages/WebsiteManagement/Home/HeroSeaction/HeroSection";
// import Services from "./pages/WebsiteManagement/Home/Services/Services";
// import Guide from "./pages/WebsiteManagement/Home/Guide/Guide";
import About from "./pages/WebsiteManagement/Home/AboutSeaction/AboutSeaction";
import AboutSection from "./pages/WebsiteManagement/Home/AboutSeaction/AboutSeaction";
// import Features from "./pages/WebsiteManagement/Home/Features/Features";
import Footer from "./pages/WebsiteManagement/Home/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Website Management */}
        <Route path="/website-management" element={<Dashboard />}>

          {/* Home */}
          <Route path="home" element={<Home />}>

            {/* Hero */}
            <Route path="hero" element={<HeroSection />} />

            {/* Future */}

            {/* <Route path="services" element={<Services />} /> */}

            {/* <Route path="guide" element={<Guide />} /> */}

            <Route path="about" element={<AboutSection/>} />

            {/* <Route path="features-contact" element={<Features />} /> */}

            <Route path="footer" element={<Footer />} />

          </Route>

          {/* Website Pages */}

          <Route path="answer-key" element={<div>Answer Key</div>} />

          <Route path="exam" element={<div>Exam</div>} />

          <Route path="about" element={<div>About</div>} />

          <Route path="gallery" element={<div>Gallery</div>} />

          <Route path="download" element={<div>Download</div>} />

        </Route>

        {/* Users */}
        <Route path="/users" element={<Dashboard />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        <Route path="/t1" element={<Dashboard />} />
        <Route path="/t2" element={<Dashboard />} />
        <Route path="/t3" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;