import React, { Suspense, lazy } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Repolist"));

const RepoDetails = lazy(() => import("./Pages/RepoDetails"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/repodetails/:orgname/:reponame"
            element={<RepoDetails />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
