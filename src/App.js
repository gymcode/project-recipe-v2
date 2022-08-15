import { useEffect, useState, Suspense } from "react";
import "./App.css";
import RouteComponent from "./Routes";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Tilt from "vanilla-tilt";

function App() {
  useEffect(() => {
    AOS.init();
    Tilt.init();
  }, []);

  return (
    <>
      <Routes>
        {RouteComponent.map((data) => (
          <Route path={data.path} element={data.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
