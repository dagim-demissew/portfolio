import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkO5x3-OmKoUQpO99BAwSPOj0m290YNYw",
  authDomain: "portfolio-37247.firebaseapp.com",
  projectId: "portfolio-37247",
  storageBucket: "portfolio-37247.appspot.com",
  messagingSenderId: "1039491275071",
  appId: "1:1039491275071:web:9334da4fa3299e28f81b8a",
  measurementId: "G-4HGDLX2L56",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
