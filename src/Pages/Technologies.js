import React from "react";
import HeroBanner from "../Modules/Bannars/Technologies";
import { useParams } from "react-router-dom";
import { TechnologiesData } from "../API/TechnologiesApi";
import Skill from "../SharedModule/Skills";
import TechnologiesExperties from "../SharedModule/TechnologiesExperties";
import DevelopmentStepbyStep from "../SharedModule/DevelopmentStepbyStep";
import GetInTouch from "../SharedModule/GetInTouch";
import BenefitsofDevelopment from "../SharedModule/BenefitsofDevelopment";
import ProjectPortfolio from "../SharedModule/ProjectPortfollio";
import OurClients from "../SharedModule/OurClients";
import Testimonials from "../SharedModule/Testimonials";
import GetInTouchSecondBanner from "../SharedModule/GetInTouchSecondBanner";
import WhyChooseUs from "../SharedModule/WhyChooseUs";
import ReactHiring from "../Modules/Technologies/ReactHiring";
import Form from "../SharedModule/Forms";
const Technologies = ({ getSlug }) => {
  const { name, slug } = useParams();
  const data = TechnologiesData.find((value) => value.name === name);
  getSlug(data.name);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <HeroBanner HeroBanner={data.HeroBanner} />

      <Skill Skill={data.skill} />
      <TechnologiesExperties
        TechnologiesExperties={data.TechnologiesExperties}
        title={data.TechnologiesExpertiesTitle}
        para={data.TechnologiesExpertiesPara}
      />
      <DevelopmentStepbyStep DevelopmentSteps={data.DevelopmentStep} />
      <GetInTouch GetInTouch={data.GetInTouch} />
      <BenefitsofDevelopment Benefits={data.Benefits} />
      <ReactHiring />
      <ProjectPortfolio ProjectPortfolio={data.ProjectPortfollio} />
      <OurClients OurClients={data.OurClients} />
      <Testimonials Testimonials={data.Testimonials} />
      <GetInTouchSecondBanner
        GetInTouchSecondBanner={data.GetInTouchSecondbanner}
      />
      <WhyChooseUs WhyChooseUs={data.WhyChooseUs} />
      <Form Form={data.Forms} />
    </>
  );
};

export default Technologies;
