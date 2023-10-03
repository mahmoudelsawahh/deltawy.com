import Image from 'next/image'
import React from 'react'
import SubImage from '/public/4646.png'

const BetterStrategy = () => {
  return (
    <>

        <div className='container mt-5' >
          <div className='row justify-content-between align-items-center flex-column-reverse flex-md-row '>
           <div className='col-12 col-md-6 manage-ads'>
           <div className="AdsHeader">
            <h1>  أفضل   </h1>
            <h2>استراتيجية سيو    </h2>
        </div>
                <p className='py-2'>
                        توجد بعض طرق التسويق الإلكتروني المختلف الخاص بشركة دلتاوي والتي تقدمها على أكمل وجه، حيث يوجد حملات إعلانية من الطراز التقليدي والطراز الكلاسيكي.
                </p>
                <p className='py-2'>
                اصبح الآن الحملات الإعلانية على الإنترنت ناجحة بنسبة 100%، مما ساعدت وشجعت أصحاب المشاريع الصغيرة من بدء أولى خطوات النجاح.</p>
           </div>
           <div className='col-12 col-md-6 text-center'>
           <Image src={SubImage} alt="SubImage" layout='responsive'/>

           </div>
          </div>
        </div>
    </>
  )
}

export default BetterStrategy