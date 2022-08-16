import { useEffect} from "react";
import "./App.css";
import RouteComponent from "./Routes";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
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
