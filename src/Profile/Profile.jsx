import React from "react";
import "./Profile.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate("/My-Netflix-clone/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>plans</h3>
              <button onClick={handleSignOut} className="profileScreen-signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
