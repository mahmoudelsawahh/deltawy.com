import React from 'react'
import AdsManagement from '../component/service/AdsManagement'
import WhySeo from '../component/service/WhySeo'
import AdvantagesSeo from '../component/service/AdvantagesSeo'
import WebService from '../component/service/WebService'
import BetterStrategy from '../component/service/BetterStrategy'
import WhyUs from '../component/service/WhyUs'

const page = () => {
  return (
    <>
        <AdsManagement/>
        <WhySeo/>
        <AdvantagesSeo/>
        <WebService/>
        <BetterStrategy/>
        <WhyUs/>
    </>
  )
}

export default page