import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Stores from "../../pages/Stores/Stores";
import Promo from "../../pages/Promo/Promo";
import Stats from "../../pages/Stats/Stats";
import Balance from "../../pages/Balance/Balance";
import Personal from "../../pages/Personal/Personal";
import Support from "../../pages/Support/Support";
import Faq from "../../pages/FAQ/Faq";

const Content = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  )
}

export default Content
