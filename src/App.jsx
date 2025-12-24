import React from "react";
import Navbar from "./Navbar";
import Idk from "./Idk";
import Var from "./container-2/var";
import Container from "./container/Container";
import Lele from "./container-3/Lele";
import Footer from "./Footer/Footer";
import About from "./components/about";
import Security from "./components/security";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Idk />
              <Container />
              <Lele />
              <Var />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
