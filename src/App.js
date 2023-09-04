import "../src/dist/styles.css";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import LearnMore from "./Pages/LearnMore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="LearnMore" element={<LearnMore />} />
      </Routes>
    </>
  );
}

export default App;
