import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = "admin@gmail.com";
    const adminPassword = "Admin@123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>

        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>

            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;