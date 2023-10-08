// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4eCJ-k0OS-Yu73iZePNdpU8GSntTU0NY",
    authDomain: "yoga-fitness-event.firebaseapp.com",
    projectId: "yoga-fitness-event",
    storageBucket: "yoga-fitness-event.appspot.com",
    messagingSenderId: "300863166648",
    appId: "1:300863166648:web:f6e94c2591d23b2aa07c4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;