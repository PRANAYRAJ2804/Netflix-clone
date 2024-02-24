import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCb0IbL8kQEO6l7gO-iXR4IZRBtQeqpNRk",
  authDomain: "netflix-clone-6418b.firebaseapp.com",
  projectId: "netflix-clone-6418b",
  storageBucket: "netflix-clone-6418b.appspot.com",
  messagingSenderId: "580818654999",
  appId: "1:580818654999:web:4de9655e2e08e1c1ef8952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore()
const auth = getAuth(app)

export {auth}
// export default db