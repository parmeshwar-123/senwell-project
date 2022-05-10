import React from 'react'
import {ProductDevelopmentData} from '../../API/ServicesApi'
import HeroBanner from '../../Modules/Bannars/Mobile'
import GetInTouch from '../../SharedModule/GetInTouch'
import ProjectPortfolio from '../../SharedModule/ProjectPortfollio'
import TechnologiesExperties from '../../SharedModule/TechnologiesExperties'
import Testimonials from '../../SharedModule/Testimonials'
import Form from '../../SharedModule/Forms'
import GetInTouchSecondBanner from '../../SharedModule/GetInTouchSecondBanner'
import BenefitsofDevelopment from '../../SharedModule/BenefitsofDevelopment'
const ProductDevelopment = () => {
  return (<>
    {ProductDevelopmentData.map((value)=> <>
   
        <HeroBanner HeroBanner={value.HeroBanner}/>
        <BenefitsofDevelopment Benefits={value.Benefits} />
        <GetInTouch GetInTouch={value.GetInTouch}/>
        <TechnologiesExperties TechnologiesExperties={value.TechnologiesExperties} title={value.TechnologiesExpertiesTitle} para={value.TechnologiesExpertiesPara} />
        <ProjectPortfolio ProjectPortfolio={value.ProjectPortfollio}/>
        <Testimonials Testimonials={value.Testimonials} />
        <GetInTouchSecondBanner GetInTouchSecondBanner={value.GetInTouchSecondbanner}/>
        <Form Form={value.Forms} />
        </>)}
        </>
  )
}

export default ProductDevelopment