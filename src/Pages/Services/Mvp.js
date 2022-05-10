import React from 'react'
import HeroBanner from '../../SharedModule/HeroBanner'
import { useParams } from 'react-router-dom'
import {Services } from '../../API/ServicesApi'
import IndustriesBanner from '../../SharedModule/IndustriesBanner'
import Whydeveopmvp from '../../Modules/Services/Mvp/whydevelopmvp'
import DevProcess from '../../Modules/Services/Mvp/DevProcess'
import BenefitsofDevelopment from '../../SharedModule/BenefitsofDevelopment'
import WhyChooseUs from '../../SharedModule/WhyChooseUs'
import ProjectPortfolio from '../../SharedModule/ProjectPortfollio'
import DevelopmentSourcing  from '../../Modules/Services/Mvp/DevelopmentSourcing.js'
import TechnologiesExperties from '../../SharedModule/TechnologiesExperties'
import Forms from '../../SharedModule/Forms'
const Mvp = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      const { name, slug } = useParams();
    const data = Services.find((value) => (value.name === 'mvp-development'))
  return (
      <>
   
        <HeroBanner HeroBanner={data.HeroBanner}/>
        <IndustriesBanner IndustriesBanner={data.industriesBanner}/>
        <Whydeveopmvp/>
        <DevProcess/>
        <BenefitsofDevelopment Benefits={data.Benefits} />
        <WhyChooseUs WhyChooseUs={data.WhyChooseUs}/>
        <DevelopmentSourcing/>
        <TechnologiesExperties TechnologiesExperties={data.TechnologiesExperties} title={data.TechnologiesExpertiesTitle} para={data.TechnologiesExpertiesPara}/>
        <ProjectPortfolio ProjectPortfolio={data.ProjectPortfollio}/>
        <Forms Form={data.Forms}/>
  </>
  )
}

export default Mvp