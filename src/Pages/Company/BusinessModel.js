import React from "react";
import { BusinessModelData } from "../../API/BusinessModelsApi";
import HeroBanner from "../../Modules/Bannars/Company";
import Collaboration from "../../Modules/Company/CollaborationYourTeam";
import GetInTouch from "../../SharedModule/GetInTouch";
import Workflow from "../../Modules/Company/Workflow";
import BudgetTable from "../../Modules/Company/BudgetTable";
import GetInTouchSecondBanner from "../../SharedModule/GetInTouchSecondBanner";
import Entrustyourproject from "../../Modules/Company/Entrustyourproject";
import FlexibleApproch from "../../Modules/Company/FlexibleApproch";
import Testimonials from "../../SharedModule/Testimonials";
import Form from "../../SharedModule/Forms";
const Company = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {BusinessModelData.map((value) => (
        <>
          <HeroBanner HeroBanner={value.HeroBanner} />
          <Collaboration />
          <GetInTouch GetInTouch={value.GetInTouch} />
          <Workflow />
          <BudgetTable />
          <GetInTouchSecondBanner
            GetInTouchSecondBanner={value.GetInTouchSecondbanner}
          />
          <Entrustyourproject />
          <FlexibleApproch />
          <Testimonials Testimonials={value.Testimonials} />
          <Form Form={value.Forms} />
        </>
      ))}
    </>
  );
};

export default Company;
