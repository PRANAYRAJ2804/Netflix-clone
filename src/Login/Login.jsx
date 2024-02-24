import React, { useState } from "react";
import "./Login.css";
import logo from "../../public/netflix.png";
import SignUp from "../SignUp/SignUp";
const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img className="loginScreen-logo" src={logo} alt="" />
        <button onClick={() => setSignIn(true)} className="loginScreen-button">
          Sign In
        </button>
        <div className="loginScreen-gradient"></div>
      </div>
      <div className="loginScreen-body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen-getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
