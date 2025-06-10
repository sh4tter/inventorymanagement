import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, clearError } from "../redux/slices/authSlice";

export default function Login({ setIsLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="input-with-icon">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="username@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) dispatch(clearError());
          }}
        />
      </div>

      <div className="input-with-icon">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) dispatch(clearError());
          }}
        />
      </div>

      {error && <p className="error-text">{error}</p>}

      <a href="#" className="forgot-link">Forgot Password?</a>
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "LOGIN"}
      </button>

      <div className="divider">or</div>

      <p className="auth-toggle-text">
        Don’t have an account yet?
        <span onClick={setIsLogin}>Sign up for free</span>
      </p>
    </form>
  );
}
