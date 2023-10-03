import React from 'react'
import ServiceBanner from './component/ServiceBanner'
import AdvantagesAds from './component/AdvantagesAds'
import ManageAds from './component/ManageAds'
import Service from './component/Service'

const page = () => {
  return (
    <>
      <ServiceBanner/>
      <AdvantagesAds/>
      <ManageAds/>
      <Service/>
    </>
  )
}

export default page