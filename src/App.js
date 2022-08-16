import { useEffect} from "react";
import "./App.css";
import RouteComponent from "./Routes";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import * as Sentry from "@sentry/react";


const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <SentryRoutes>
        {RouteComponent.map((data) => (
          <Route path={data.path} element={data.element} />
        ))}
      </SentryRoutes>
    </>
  );
}

export default Sentry.withProfiler(App);
