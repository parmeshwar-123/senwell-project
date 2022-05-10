import React from "react";
import Career from "../../Modules/Company/Careers/Career";
import Hiring from "../../Modules/Company/Careers/Hiring";
import HiringProcess from "../../Modules/Company/Careers/HiringProcess";
const Careers = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <>
        <Career />
        <Hiring />
        <HiringProcess />
      </>
    </>
  );
};

export default Careers;
