import React from 'react'
import {TestingData} from '../../API/ServicesApi'
//import HeroBanner from '../../SharedModule/HeroBannerDark'
//import HeroBanner from '../Modules/Bannars/TestingQA'
import HeroBanner from '../../Modules/Bannars/TestingQA'
import TypeOfTesting from '../../Modules/Services/Testing&QA/TypesofTesting'
import QuickStart from '../../Modules/Services/Testing&QA/QuickStart'
import GetInTouch from '../../SharedModule/GetInTouch'
import ProjectPortfolio from '../../SharedModule/ProjectPortfollio'
import OurQAProcess from '../../Modules/Services/Testing&QA/OurQAProcess'
import TechnologiesExperties from '../../SharedModule/TechnologiesExperties'
import Testimonials from '../../SharedModule/Testimonials'
import Form from '../../SharedModule/Forms'

const Testing = () => {
  return (<>
    {TestingData.map((value)=> <>
<HeroBanner HeroBanner={value.HeroBanner}/>
<TypeOfTesting/>
<QuickStart/>
<GetInTouch GetInTouch={value.GetInTouch}/>
<OurQAProcess />
<TechnologiesExperties TechnologiesExperties={value.TechnologiesExperties} title={value.TechnologiesExpertiesTitle} para={value.TechnologiesExpertiesPara} />
<ProjectPortfolio ProjectPortfolio={value.ProjectPortfollio}/>
<Testimonials Testimonials={value.Testimonials} />
<Form  Form={value.Forms} />
</>)}
  </>)
}

export default Testing