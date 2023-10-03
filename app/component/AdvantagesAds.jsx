import Image from "next/image"
import firstIcon from '/public/social-media.svg'
import secondtIcon from '/public/paper.svg'
import threadtIcon from '/public/message (1).svg'
import fourthIcon from '/public/engagement.svg'
import fiveIcon from '/public/digital-marketing.svg'
import sexIcon from '/public/advertising.svg'

const data = [
    {
        icon : firstIcon,
        title : 'زياده التفاعل',
        body : `يعد زياده التفاعل من إحدى أهم الأمور و مزايا التي يجب أن تنظر إليها داخل موقَعك الإلكتروني.
                    ولذلك فأن عملية التسويق الكتروني توفر لك فرصة كبيرة لزياده التفاعل من قبل العملاء.`
    },
    {
        icon : secondtIcon,
        title : 'زياده التفاعل',
        body : `يعد زياده التفاعل من إحدى أهم الأمور و مزايا التي يجب أن تنظر إليها داخل موقَعك الإلكتروني.
                    ولذلك فأن عملية التسويق الكتروني توفر لك فرصة كبيرة لزياده التفاعل من قبل العملاء.`
    },
    {
        icon : threadtIcon,
        title : 'زياده التفاعل',
        body : `يعد زياده التفاعل من إحدى أهم الأمور و مزايا التي يجب أن تنظر إليها داخل موقَعك الإلكتروني.
                    ولذلك فأن عملية التسويق الكتروني توفر لك فرصة كبيرة لزياده التفاعل من قبل العملاء.`
    },
    {
        icon : fourthIcon,
        title : 'زياده التفاعل',
        body : `يعد زياده التفاعل من إحدى أهم الأمور و مزايا التي يجب أن تنظر إليها داخل موقَعك الإلكتروني.
                    ولذلك فأن عملية التسويق الكتروني توفر لك فرصة كبيرة لزياده التفاعل من قبل العملاء.`
    },
    {
        icon : fiveIcon,
        title : 'زياده التفاعل',
        body : `يعد زياده التفاعل من إحدى أهم الأمور و مزايا التي يجب أن تنظر إليها داخل موقَعك الإلكتروني.
                    ولذلك فأن عملية التسويق الكتروني توفر لك فرصة كبيرة لزياده التفاعل من قبل العملاء.`
    },
    {
        icon : sexIcon,
        title : 'زياده التفاعل',
        body : `يعد زياده التفاعل من إحدى أهم الأمور و مزايا التي يجب أن تنظر إليها داخل موقَعك الإلكتروني.
                    ولذلك فأن عملية التسويق الكتروني توفر لك فرصة كبيرة لزياده التفاعل من قبل العملاء.`
    },
]

const AdvantagesAds = () => {
  return (
    <div className="container">
     <div className="AdsHeader">
        <h1>  مميزات</h1>
        <h2>الحملات الإعلانية على الإنترنت</h2>
     </div>
     <div className="row">

        {
            data.map((item , id)=>{
                return (
                    <div key={id} className="col-12 col-md-4 Ads-content">
                        <Image src={item.icon} alt={item.title} width={75} height={75}/>
                        <h1>{item.title} </h1>
                        <p>{item.body}</p>
                    </div>
                )
            })
        }
        
     </div>
    </div>
  )
}

export default AdvantagesAds