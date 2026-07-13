import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />

        <Route path="/website-management" element={<Dashboard />} />

        <Route path="/users" element={<Dashboard />} />

        <Route path="/settings" element={<Settings/>} />

        <Route path="/t1" element={<Dashboard />} />

        <Route path="/t2" element={<Dashboard />} />

        <Route path="/t3" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;