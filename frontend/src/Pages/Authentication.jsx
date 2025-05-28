import React, { useState } from "react";
import "../styles/Auth.css";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  const [fade, setFade] = useState(true);

  const handleToggle = () => {
    setFade(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFade(true);
    }, 300); // matches CSS animation duration
  };

  return (
    <div className="auth-bg">
      <div className="floating-shapes">
    <div className="shape shape1"></div>
    <div className="shape shape2"></div>
    <div className="shape shape3"></div>
    <div className="shape shape4"></div>
    <div className="shape shape5"></div>
  </div>
      <div className="auth-glass-card">
        <h2>Your logo</h2>
        <div className={`fade-wrapper ${fade ? "fade-in" : "fade-out"}`}>
          {isLogin ? (
            <Login setIsLogin={handleToggle} />
          ) : (
            <Signup setIsLogin={handleToggle} />
          )}
        </div>
      </div>
    </div>
  );
}
