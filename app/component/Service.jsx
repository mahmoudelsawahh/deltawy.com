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
const Service = () => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f9f9f9" fillOpacity="1" d="M0,256L60,250.7C120,245,240,235,360,224C480,213,600,203,720,208C840,213,960,235,1080,250.7C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" speechify-initial-font-family="GTWalsheim, system-ui, sans-serif" speechify-initial-font-size="16px"></path>
</svg>
        <div className='service-layout'>
            <div className='container'>
                <h1>خدمات دلتاوي</h1>
                <div className="row gap-5 justify-content-around px-3 px-md-0">
        {
            data.map((item , id)=>{
                return (
                    <div key={id} className="col-12 col-md-3 Ads-content" style={{backgroundColor : '#fff' , borderRadius : '20px'}}>
                        <Image src={item.icon} alt={item.title} width={75} height={75}/>
                        <h1>{item.title} </h1>
                        <p>{item.body}</p>
                    </div>
                )
            })
        }
        
     </div>
            </div>

        </div>
     </>
  )
}

export default Service