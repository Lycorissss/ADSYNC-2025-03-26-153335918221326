import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import AdsDashboard from "./page/advertiser/Dashboard";
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advertiser/" element={<AdsDashboard />} />
        </Routes>
    </Router>
  );
};

export default App;
