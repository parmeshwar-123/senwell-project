import React, { useEffect } from "react";
import { HomePageData } from "../API/HomeApi";
import HeroBanner from "../Modules/Home/HeroBanner";
import WeHelpWith from "../Modules/Home/WeHelpWith";
import Workflow from "../Modules/Home/Workflow";
import GetInTouch from "../SharedModule/GetInTouch";
import OurClients from "../SharedModule/OurClients";
import ProjectPortfolio from "../SharedModule/ProjectPortfollio";
import Testimonials from "../SharedModule/Testimonials";
import Achievements from "../SharedModule/Achievements";
import ImportantDetails from "../Modules/Home/ImportantDetails";
import Form from "../SharedModule/Forms";
import Slider from "../Modules/Slider";
const Home = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {HomePageData.map((value) => (
        <>
          {/* <HeroBanner/> */}
          <Slider />
          <WeHelpWith />
          <Workflow />
          <h1>{value.GetInTouchTitle}</h1>
          <GetInTouch GetInTouch={value.GetInTouch} />
          <OurClients OurClients={value.OurClients} />
          <ProjectPortfolio ProjectPortfolio={value.ProjectPortfollio} />
          <Testimonials Testimonials={value.Testimonials} />
          <Achievements />
          <ImportantDetails />
          <Form Form={value.Forms} />
        </>
      ))}
    </>
  );
};

export default Home;
