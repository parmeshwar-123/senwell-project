import React from 'react'
import {CompanyData } from '../../API/CompanyApi'
import HeroBanner from '../../SharedModule/HeroBanner'
import Skill from '../../SharedModule/Skills'
import GetInTouch from '../../SharedModule/GetInTouch'
import Whysenwell from '../../SharedModule/Whysenwell'
import Form from '../../SharedModule/Forms'
const Company = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
<>
{CompanyData.map((value)=>
<>
<HeroBanner HeroBanner={value.HeroBanner}/>
<Skill  Skill={value.skill}/>
<Whysenwell  Whysenwell={value.whysenwell}/>
<GetInTouch GetInTouch={value.GetInTouch}/>
<Form Form={value.Forms}/>

</>
)}
</>  )
}

export default Company