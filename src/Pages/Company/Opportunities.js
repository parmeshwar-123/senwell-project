import React from "react";
import HomeBanner from "../../Modules/Bannars/Company";
import { OpportunitiesData } from "../../API/OpportunitiesApi";
import WeOffer from "../../Modules/Company/Careers/WeOffer";
import Hiring from "../../Modules/Company/Careers/Hiring";
import Growth from "../../Modules/Company/Careers/Growth";
import Form from "../../SharedModule/Forms";
const Opportunities = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {OpportunitiesData.map((value) => (
        <>
          <HomeBanner HeroBanner={value.HeroBanner} />
          <WeOffer />
          <Hiring />
          <Growth />
          <Form Form={value.Forms} />
        </>
      ))}
    </>
  );
};

export default Opportunities;
