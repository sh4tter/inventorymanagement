import React from "react";

export default function Login({ setIsLogin }) {
  return (
    <form className="auth-form">
      <div className="input-with-icon">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="username@gmail.com" />
      </div>

      <div className="input-with-icon">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>

      <a href="#" className="forgot-link">Forgot Password?</a>
      <button type="submit">LOGIN</button>

      <div className="divider">or</div>

      <p className="auth-toggle-text">
        Don’t have an account yet?
        <span onClick={setIsLogin}>Sign up for free</span>
      </p>
    </form>
  );
}
