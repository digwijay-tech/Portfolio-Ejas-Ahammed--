
import Logo1 from '../../assets/img/Logos/logo-1.jpg';
import Logo2 from '../../assets/img/Logos/logo-2.jpg'
import Logo3 from '../../assets/img/Logos/logo-3.jpg'
import Logo4 from '../../assets/img/Logos/logo-4.jpg'
import Logo5 from '../../assets/img/Logos/logo-5.jpg'

const logo =[
  {
    img : Logo1 ,
    src :'https://www.behance.net/gallery/204830799/TWO-44-LOGO-SOFTWARE-COMPANY-LOGO-BRAND-IDENTITY',
  },
  {
    img : Logo2 ,
    src :'https://www.behance.net/gallery/202394681/AMSTANFIN-WEALTH-LOGO',
  },
  {
    img : Logo3 ,
    src :'',
  },
  {
    img : Logo4 ,
    src :'https://www.behance.net/gallery/203546321/IEP-CONSULTING-BCBA-LOGO',
  },
  {
    img : Logo5 ,
    src :'https://www.behance.net/gallery/206135045/Travel-Logo-Design-Saffron-Tours',
  },
]

const SlideShow = () => {
   
   const handleOnClick =(link)=>{
      window.open(link);
   }
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {logo.map((src, index) => (
        
        <img
          key={index}
          src={src.img}
          alt={`Image ${index + 1}`}
          onClick={()=>handleOnClick(src.src)}
          className="lg:h-72 h-auto flex-shrink-0 cursor-pointer"
        />
      ))}
    </div>  )
}

export default SlideShow