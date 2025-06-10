// dashboard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Make sure this matches your actual exported action creator name
import { logoutUser } from "../redux/slices/authSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Calling dispatch(logoutUser()) will update Redux state
    // and remove the token from localStorage (as configured in the reducer).
    dispatch(logoutUser());

    // Navigate to the root. App.js will then handle where to land
    // based on the updated isAuthenticated state.
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}