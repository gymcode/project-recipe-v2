import { useEffect } from "react";
import "./App.css";
import { PageComponents } from "./Routes";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import * as Sentry from "@sentry/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ToastContainer />
      <SentryRoutes>
        {PageComponents.map((data) => (
          <Route path={data.path} element={data.element} />
        ))}
      </SentryRoutes>
    </>
  );
}

export default Sentry.withProfiler(App);
