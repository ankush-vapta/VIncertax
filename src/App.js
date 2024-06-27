import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from "./component/Loader/Loader";

const Vincertax = lazy(() => import('./component/Landingpage/Vincertax'));
const DashboardLayout = lazy(() => import('./component/Dashboard/Dashboard'));
const Login = lazy(() => import('./component/Login-signup/Login'));
const Documents = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Documents })));
const Search = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Search })));
const Projects = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Projects })));
const People = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.People })));
const Invoices = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Invoices })));
const Chat = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Chat })));
const Notifications = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Notifications })));
const Settings = lazy(() => import('./component/pages/aboutus/AboutUs').then(module => ({ default: module.Settings })));

const App = () => {
  return (
    <>
      <div>

        <Router>
          <Suspense
            fallback={<Loader />}
          >
            <Routes>
              <Route
                path="/"
                element={<Vincertax />}
              />
              <Route
                path="/Login"
                element={<Login />}
              />

              <Route
                element={<DashboardLayout />}
              >
                <Route
                  path="/documents"
                  element={<Documents />}
                />
                <Route
                  path="/search"
                  element={<Search />}
                />
                <Route
                  path="/projects"
                  element={<Projects />}
                />
                <Route
                  path="/people"
                  element={<People />}
                />
                <Route
                  path="/invoices"
                  element={<Invoices />}
                />
                <Route
                  path="/chat"
                  element={<Chat />}
                />
                <Route
                  path="/notifications"
                  element={<Notifications />}
                />
                <Route
                  path="/settings"
                  element={<Settings />}
                />
              </Route>

              <Route
                path="*"
                element={<>NotFound</>}
              />
            </Routes>
          </Suspense>
        </Router>
      </div>

    </>
  );
}

export default App;
