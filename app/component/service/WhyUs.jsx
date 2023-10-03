import Image from 'next/image'
import React from 'react'
import SubImage from '/public/3z_marketing_3-[Converted].png'

const WhyUs = () => {
  return (
    <>

        <div className='container' >
     
          <div className='row justify-content-between align-items-center flex-column-reverse flex-md-row '>
           <div className='col-12 col-md-6 manage-ads'>
           <div className="AdsHeader">
            <h1>    لماذا نحن افضل شركة  SEO   </h1>
             </div>
                <p className='py-2'>
                        توجد بعض طرق التسويق الإلكتروني المختلف الخاص بشركة دلتاوي والتي تقدمها على أكمل وجه، حيث يوجد حملات إعلانية من الطراز التقليدي والطراز الكلاسيكي.
                </p>
                <p className='py-2'>
                اصبح الآن الحملات الإعلانية على الإنترنت ناجحة بنسبة 100%، مما ساعدت وشجعت أصحاب المشاريع الصغيرة من بدء أولى خطوات النجاح.</p>
                
                
           </div>
           <div className='col-12 col-md-4 text-center'>
           <Image src={SubImage} alt="SubImage" layout='responsive'/>

           </div>
          </div>
        </div>
    </>
  )
}

export default WhyUs