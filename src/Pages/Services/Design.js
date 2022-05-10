import React from 'react'
import {DesignData} from '../../API/DesignApi'
import HeroBanner from '../../Modules/Bannars/DesignBanner'
import WeCanHelpYou from '../../Modules/Services/Design/WeCanHelpYou'
import EngagingConcept from '../../Modules/Services/Design/EngagingConcept'
import GetInTouch from '../../SharedModule/GetInTouch'
import BenefitsofDevelopment from '../../SharedModule/BenefitsofDevelopment'
import TechnologiesExperties from '../../SharedModule/TechnologiesExperties'
import ProjectPortfolio from '../../SharedModule/ProjectPortfollio'
import ImportantDetails from '../../Modules/Services/Design/ImportantDetails'
import Form from '../../SharedModule/Forms'
const Design = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
<>
{DesignData.map((value)=>
<>
<HeroBanner HeroBanner={value.HeroBanner}/>
<WeCanHelpYou/>
<EngagingConcept Skill={value.skill} />
<GetInTouch GetInTouch={value.GetInTouch}/>
<BenefitsofDevelopment Benefits={value.Benefits} />
<TechnologiesExperties TechnologiesExperties={value.TechnologiesExperties} title={value.TechnologiesExpertiesTitle} para={value.TechnologiesExpertiesPara}/>
<ProjectPortfolio ProjectPortfolio={value.ProjectPortfollio}/>
<ImportantDetails/>
<Form Form={value.Forms}/>
</>
)}
</>  )
}

export default Design