import React from 'react'
import {DevopsData} from '../../API/ServicesApi'
import GetInTouch from '../../SharedModule/GetInTouch'
import HeroBanner from '../../Modules/Bannars/Mobile'
import ImpressYourClient from '../../SharedModule/ImpressYourClient'
import ProjectPortfolio from '../../SharedModule/ProjectPortfollio'
import TechnologiesExperties from '../../SharedModule/TechnologiesExperties'
import GetInTouchSecondBanner from '../../SharedModule/GetInTouchSecondBanner'
import Testimonials from '../../SharedModule/Testimonials'
import Form from '../../SharedModule/Forms'
const Devops = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
  return (
      <>
    {DevopsData.map((data)=><>
        <HeroBanner HeroBanner={data.HeroBanner}/>
        <ImpressYourClient
    ImpressYourClientTitle={data.ImpressYourClientTitle}
    ImpressYourClientPara={data.ImpressYourClientPara} 
    ImpressYourClientPoints={data.ImpressYourClientPoints} 
    DevelopmentSolutionsList={data.DevelopmentSolutionsList}
    ImpressYourClientImage={data.ImpressYourClientImage}
    DevelopmentSolutionsTitle={data.DevelopmentSolutionsTitle}/>
    <GetInTouch GetInTouch={data.GetInTouch}/>
    <TechnologiesExperties TechnologiesExperties={data.TechnologiesExperties} title={data.TechnologiesExpertiesTitle} para={data.TechnologiesExpertiesPara} />
    <GetInTouchSecondBanner GetInTouchSecondBanner={data.GetInTouchSecondbanner}/>
    <Testimonials Testimonials={data.Testimonials}/>
 <ProjectPortfolio ProjectPortfolio={data.ProjectPortfollio}/> 
 <Form Form={data.Forms}/>
    </>
  )}
  </>
  )
}

export default Devops