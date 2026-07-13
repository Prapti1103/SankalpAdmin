import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route path="/" element={<Login />} />

        {/* Dashboard */}

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Website Management */}

        <Route path="/website-management" element={<Dashboard />} />

        <Route path="/website-management/home" element={<Dashboard />} />

        <Route path="/website-management/answer-key" element={<Dashboard />} />

        <Route path="/website-management/exam" element={<Dashboard />} />

        <Route path="/website-management/login" element={<Dashboard />} />

        <Route path="/website-management/about" element={<Dashboard />} />

        <Route path="/website-management/gallery" element={<Dashboard />} />

        <Route path="/website-management/download" element={<Dashboard />} />

        {/* Users */}

        <Route path="/users" element={<Dashboard />} />

        {/* Navbar */}

        <Route path="/settings" element={<Settings />} />

        <Route path="/t1" element={<Dashboard />} />

        <Route path="/t2" element={<Dashboard />} />

        <Route path="/t3" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;