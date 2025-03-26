import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import AdsDashboard from "./page/advertiser/Dashboard";
import AdsStore from "./page/advertiser/AdsStore"
import AdsDetailStore from "./page/advertiser/Details"

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advertiser/" element={<AdsDashboard />} />
            <Route path="/advertiser/Store" element={<AdsStore/>} />
            <Route path="/advertiser/Store/detail/:id" element={<AdsDetailStore/>} />
        </Routes>
    </Router>
  );
};

export default App;
