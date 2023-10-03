import Image from 'next/image'
import React from 'react'
import SubImage from '/public/2.png'
const ManageAds = () => {
  return (
    <>
        <div className='container' >
        <div className="AdsHeader">
            <h1>  ما هي</h1>
            <h2>إدارة الحملات الإعلانية ؟</h2>
        </div>
          <div className='row justify-content-between align-items-center flex-column-reverse flex-md-row '>
           <div className='col-12 col-md-6 manage-ads'>
                <p className='py-2'>
                        توجد بعض طرق التسويق الإلكتروني المختلف الخاص بشركة دلتاوي والتي تقدمها على أكمل وجه، حيث يوجد حملات إعلانية من الطراز التقليدي والطراز الكلاسيكي.
                </p>
                <p className='py-2'>
                اصبح الآن الحملات الإعلانية على الإنترنت ناجحة بنسبة 100%، مما ساعدت وشجعت أصحاب المشاريع الصغيرة من بدء أولى خطوات النجاح.</p>
                <p>توجد بعض طرق التسويق الإلكتروني المختلف الخاص بشركة دلتاوي والتي تقدمها على أكمل وجه، حيث يوجد حملات إعلانية من الطراز التقليدي والطراز الكلاسيكي.</p>
                 <button className='btn btn-primary my-3'>مشاهدة المزيد</button>
           </div>
           <div className='col-12 col-md-6 text-center'>
           <Image src={SubImage} alt="SubImage" width={350} height={350}/>

           </div>
          </div>
        </div>
    </>
  )
}

export default ManageAds