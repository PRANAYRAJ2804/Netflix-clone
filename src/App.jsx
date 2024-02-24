import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import Profile from "./Profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        dispatch(
          login({
            uid: uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/Netflix-clone/" element={<Login />} />
          ) : (
            <>
              <Route path="/Netflix-clone/profile" element={<Profile />} />
              <Route path="/Netflix-clone/" element={<Home />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
