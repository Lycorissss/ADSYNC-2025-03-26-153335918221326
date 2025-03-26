import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import AdsDashboard from "./page/advertiser/Dashboard"
import AdsStore from "./page/advertiser/AdsStore"
import AdsDetailStore from "./page/advertiser/Details"
import AdsOrder from "./page/advertiser/Order";
import SallerDashboard from "./page/influencer/Dashboard"
import AdsSaller from "./page/influencer/ads/GetAds";
import ServiceForm from "./page/influencer/ads/CreateAds";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advertiser/" element={<AdsDashboard />} />
            <Route path="/advertiser/Order" element={<AdsOrder/>} />
            <Route path="/advertiser/Store" element={<AdsStore/>} />
            <Route path="/advertiser/Store/detail/:id" element={<AdsDetailStore/>} />
            <Route path="/saller/" element={<SallerDashboard />} />
            <Route path="/saller/ads-list" element={<AdsSaller/>} />
            <Route path="/saller/ads/create" element={<ServiceForm />} />
            <Route path="/saller/ads/edit/:id" element={<AdsDashboard />} />
            <Route path="/saller/ads/detail/:id" element={<AdsDashboard />} />
        </Routes>
    </Router>
  );
};

export default App;
