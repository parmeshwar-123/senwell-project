import React from "react";
import { useParams } from "react-router-dom";
import { IndustriesData } from "../API/IndustriesApi";
import HeroBanner from "../Modules/Bannars/IndustriesBanner";
import IndustriesBanner from "../SharedModule/IndustriesBanner";
import IndustriesIdealSoution from "../SharedModule/IndustriesIdealSolution";
import TechnologiesExperties from "../SharedModule/TechnologiesExperties";
import GetInTouch from "../SharedModule/GetInTouch";
import ProjectPortfolioLight from "../SharedModule/ProjectPortfolioLight";
import OurClients from "../SharedModule/OurClients";
import Testimonials from "../SharedModule/Testimonials";
import GetInTouchSecondBanner from "../SharedModule/GetInTouchSecondBanner";
import WhyChooseUs from "../SharedModule/WhyChooseUs";
import IndustriesPartner from "../SharedModule/IndustriesPartner";
import Form from "../SharedModule/Forms";
import Banner from "../SharedModule/Banner";
const Industries = () => {
  const { name } = useParams();
  const data = IndustriesData.find((value) => value.name === name);
  return (
    <>
      <HeroBanner HeroBanner={data.HeroBanner} />
      {/* <Banner/> */}
      <IndustriesBanner IndustriesBanner={data.industriesBanner} />
      <IndustriesIdealSoution idealSolution={data.idealSolution} />
      <TechnologiesExperties
        TechnologiesExperties={data.TechnologiesExperties}
        title={data.TechnologiesExpertiesTitle}
        para={data.TechnologiesExpertiesPara}
      />
      <GetInTouch GetInTouch={data.GetInTouch} />
      <ProjectPortfolioLight
        ProjectPortfolio={data.ProjectPortfollio}
        ProjectPortfolliotitle={data.ProjectPortfolliotitle}
      />
      <OurClients OurClients={data.OurClients} />
      <IndustriesPartner
        IndustriesPartner={data.IndustriesPartner}
        IndusriesPartnertitle={data.IndusriesPartnertitle}
        IndustriesPartnerPara={data.IndustriesPartnerPara}
      />
      <GetInTouchSecondBanner
        GetInTouchSecondBanner={data.GetInTouchSecondbanner}
      />
      <Testimonials Testimonials={data.Testimonials} />
      <WhyChooseUs WhyChooseUs={data.WhyChooseUs} />
      <Form Form={data.Forms} />
    </>
  );
};

export default Industries;
