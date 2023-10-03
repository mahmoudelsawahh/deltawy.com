import Image from "next/image"
import SubImage from '/public/1.png'
const ServiceBanner = () => {
  return (
    <div className="mb-5 overflow-hidden">       
        <div className="row align-items-center flex-column-reverse flex-md-row justify-content-between">
        <div className="col-12 col-md-6">
             <div className="parent-banner my-md-0 mt-5">
             <h1>إدارة الحملات الإعلانية</h1>
               <p>إدارة الحملات الإعلانية ، نقدم لك افضل الحملات الاعلانية على الانترنت، تساهم شركة دلتاوي بتوفير خدمات الحملات الإعلانية عن طريقها، حيث يقوم ممثلي دلتاوي
                بإنشاء الحملة المناسبة واستهداف الجمهور المناسب بشكل مثالي.</p>
             </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <Image src={SubImage} alt="SubImage" width={300} height={300}/>
          </div>
        </div>
    </div>
  )
}
export default ServiceBanner