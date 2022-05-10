import React, { useState } from "react";
import Home from "./Pages/Home";
import Company from "./Pages/Company/Company";
import BusinessModels from "./Pages/Company/BusinessModel";
import Footer from "./Layouts/Footer/Footer";
import WebDevelopment from "./Pages/Services/WebDevelopment";

import Careers from "./Pages/Company/Careers";
import Opportunities from "./Pages/Company/Opportunities";

import Development from "./Pages/Services/Development";
import Design from "./Pages/Services/Design";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import ScrollToTop from "./Modules/ScrollToTop";
import Technologies from "./Pages/Technologies";
import Devops from "./Pages/Services/Devops";
import Pricing from "./Pages/Company/Pricing";
import ScrollToTopButton from "./Modules/ScrollToTopButton";
import UnderConstruction from "./Pages/UnderConstruction";
import Testing from "./Pages/Services/Testing";
import Industries from "./Pages/Industries";
import Mvp from "./Pages/Services/Mvp";
import ProductDevelopment from "./Pages/Services/ProductDevelopment";
import Nav from "./Layouts/Nav";
import NewFooter from "./Layouts/Footer/NewFooter";
import IndustriesnewMenu from "./Pages/IndustriesnewMenu";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
const App = () => {
  const [slug, setSlug] = useState(false);
  const getSlug = (slug) => {
    setSlug(slug);
  };
  return (
    <>
      <ScrollToTopButton />
      <Router>
        <ScrollToTop />
        <Nav slug={slug} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route
            exact
            path="/outsourcing-pricing-models"
            element={<BusinessModels />}
          />
          <Route exact path="/careers" element={<Careers />} />
          <Route
            exact
            path="/careers/opportunity"
            element={<Opportunities />}
          />
          <Route exact path="/services/ui-ux-design" element={<Design />} />
          <Route exact path="/services" element={<UnderConstruction />} />
          <Route exact path="/services/mvp-development" element={<Mvp />} />

          <Route exact path="/technologies" element={<UnderConstruction />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route
            exact
            path="/services/custom-software-development"
            element={<Development />}
          />
          <Route exact path="/services/devops" element={<Devops />} />
          <Route exact path="/industries" element={<UnderConstruction />} />
          <Route
            exact
            path="/:slug/:name"
            element={<Technologies getSlug={getSlug} />}
          />
          <Route exact path="/services/testing-and-qa" element={<Testing />} />
          {/* <Route exact path="/hire-developers/:slug" element={<FrontEnd/>}/>  */}
          <Route exact path="/services/:name" element={<WebDevelopment />} />
          <Route exact path="/industries/:name" element={<Industries />} />
          <Route exact path="/:slug" element={<IndustriesnewMenu />} />
          {/* <Route
            exact
            path="/hire-developers/cms-crm-erp"
            element={<UnderConstruction />}
          /> */}
          <Route
            exact
            path="/services/product-development"
            element={<ProductDevelopment />}
          />
          <Route exact path="/projects" element={<UnderConstruction />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />

          {/* <Route path="*" element={<UnderConstruction/>} /> */}
        </Routes>
        <NewFooter />
      </Router>
    </>
  );
};

export default App;
