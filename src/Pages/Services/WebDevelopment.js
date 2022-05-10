import React from "react";
import { Services } from "../../API/ServicesApi";
import MobileHerobanner from "../../Modules/Bannars/Mobile";
import HeroBanner from "../../Modules/Bannars/DeicatedDteams";
import HeroBannerIt from "../../Modules/Bannars/Itconsulting";
import HeroBannerWeb from "../../Modules/Bannars/Webdevlopment";
import { useParams } from "react-router-dom";
import ImpressYourClient from "../../SharedModule/ImpressYourClient";
import TechnologiesExperties from "../../SharedModule/TechnologiesExperties";
import GetInTouchSecondBanner from "../../SharedModule/GetInTouchSecondBanner";
import Achievements from "../../SharedModule/Achievements";
import Testimonials from "../../SharedModule/Testimonials";
import Form from "../../SharedModule/Forms";
const WebDevelopment = () => {
  const { name, slug } = useParams();
  const data = Services.find((value) => value.name === name);
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  console.log("sdsfasad", data);
  return (
    <>
      {data.name === "dedicated-development-teams" ? (
        <HeroBanner HeroBanner={data.HeroBanner} />
      ) : data.name === "application-development" ? (
        <MobileHerobanner HeroBanner={data.HeroBanner} />
      ) : data.name === "it-consulting" ? (
        <HeroBannerIt HeroBanner={data.HeroBanner} />
      ) : (
        <HeroBanner HeroBanner={data.HeroBanner} />
      )}

      {data.name === "web-development" && (
        <HeroBannerWeb HeroBanner={data.HeroBanner} />
      )}

      <ImpressYourClient
        ImpressYourClientTitle={data.ImpressYourClientTitle}
        ImpressYourClientPara={data.ImpressYourClientPara}
        ImpressYourClientPoints={data.ImpressYourClientPoints}
        DevelopmentSolutionsList={data.DevelopmentSolutionsList}
        ImpressYourClientImage={data.ImpressYourClientImage}
        DevelopmentSolutionsTitle={data.DevelopmentSolutionsTitle}
      />
      <GetInTouchSecondBanner
        GetInTouchSecondBanner={data.GetInTouchSecondbanner}
      />
      <TechnologiesExperties
        TechnologiesExperties={data.TechnologiesExperties}
        title={data.TechnologiesExpertiesTitle}
        para={data.TechnologiesExpertiesPara}
      />
      {/* <Testimonials Testimonials={data.Testimonials} /> */}
      <Achievements />
      <Form Form={data.Forms} />
    </>
  );
};

export default WebDevelopment;
