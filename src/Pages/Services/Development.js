import React from 'react'
import {DevelopmentData} from '../../API/DevelopmentApi'
import HeroBanner from '../../Modules/Bannars/Development'
import CustomSoftwares from '../../Modules/Services/Development/CustomSoftware'
import GetInTouch from '../../SharedModule/GetInTouch'
import BenefitsofDevelopment from '../../SharedModule/BenefitsofDevelopment'
import TechnologiesExperties from '../../SharedModule/TechnologiesExperties'
import ProjectPortfolio from '../../SharedModule/ProjectPortfollio'
import Whysenwell from '../../SharedModule/Whysenwell'
import Form from '../../SharedModule/Forms'
const Development = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
  return (
    <>
    {DevelopmentData.map((value)=><>
        <HeroBanner HeroBanner={value.HeroBanner}/>
        <CustomSoftwares/>
        <GetInTouch GetInTouch={value.GetInTouch}/>
        <BenefitsofDevelopment Benefits={value.Benefits} />
        <TechnologiesExperties TechnologiesExperties={value.TechnologiesExperties} title={value.TechnologiesExpertiesTitle} para={value.TechnologiesExpertiesPara} />
            <ProjectPortfolio ProjectPortfolio={value.ProjectPortfollio} />
            <Whysenwell  Whysenwell={value.whysenwell}/>
            <Form Form={value.Forms}/>
    </>)}
    </>
  )
}

export default Development