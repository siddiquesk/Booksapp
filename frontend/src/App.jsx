import React from "react";
import Home from "./Home/Home";
import Courses from "./Course/Courses";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
