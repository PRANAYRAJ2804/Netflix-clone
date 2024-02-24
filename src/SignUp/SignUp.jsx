import React, { useRef } from "react";
import "./SignUp.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // Signed up successfully
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = alert(error.message);
      console.error("Error signing up:", errorMessage);
      // Handle error, display error message to user, etc.
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // Signed in successfully
      const user = userCredential.user;
      console.log(user);
      // ...
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = alert(error.message);
      console.error("Error signing in:", errorMessage);
      // Handle error, display error message to user, etc.
    }
  };
  return (
    <div className="signUpScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen-gray"> New to Netflix?</span>
          <span className="signUpScreen-link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
