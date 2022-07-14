import "./App.css";

import RouteComponent from "./Routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>dasda</div>
    <Routes>
      {RouteComponent.map((data) => (
        <Route path={data.path} element={data.element} />
      ))}
    </Routes>
  );
}

export default App;
