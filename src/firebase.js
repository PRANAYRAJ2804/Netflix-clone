import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC5a52jWtvzR2fxGD-yjHl0O225zY-HidM",
  authDomain: "netflix-clone-f85bf.firebaseapp.com",
  projectId: "netflix-clone-f85bf",
  storageBucket: "netflix-clone-f85bf.appspot.com",
  messagingSenderId: "1088316819870",
  appId: "1:1088316819870:web:97f7f2a22a61ae7f5aae8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore()
const auth = getAuth(app)

export {auth}
// export default db