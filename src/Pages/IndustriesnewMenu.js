import React from 'react'
import { useParams } from 'react-router-dom'
import {IndustriesData} from '../API/industriesnewMenu'
import HeroBanner from '../Modules/Bannars/industriesnewMenu'
import OurExperties from '../Modules/Industries/OurExperties'
import WhatWeDo from '../Modules/Industries/WhatWeDo'
import Forms from '../SharedModule/Forms'

const IndustriesnewMenu = () => {
    
  const { slug } = useParams();
  const data = IndustriesData.find((value) => (value.name === slug) )
  return (<>
    <HeroBanner HeroBanner={data.HeroBanner} />
    <OurExperties OurExperties={data.ourExpertise}/>
    <WhatWeDo WhatWeDo={data.WhatWeDo}/>
    <Forms Form={data.Forms}/>
     
    </>
  )
}

export default IndustriesnewMenu