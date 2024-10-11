import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDV26goxh0aWjXBjEdW5JPXgrs7e1cVImk",
      authDomain: "ejasahammed-f10aa.firebaseapp.com",
      projectId: "ejasahammed-f10aa",
      storageBucket: "ejasahammed-f10aa.appspot.com",
      messagingSenderId: "409633886446",
      appId: "1:409633886446:web:cfe03412ce0ba9ff6f63ff",
    };
    
    initializeApp(firebaseConfig);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
