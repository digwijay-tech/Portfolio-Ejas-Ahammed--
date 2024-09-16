
import { ProgressBarContainer as ProgressBar } from 'progress_bar_for_react';


const Skill = () => {
  return (
    <div className='bg-gray-800 ' id='skill'>
    <div className="  grid lg:grid-cols-2 lg:mx-8 mx-3 pb-10 pt-28 lg:pt-16"  >
      
    <div>
    <div className="flex lg:justify-start justify-center pb-4">
        <h2 className="text-yellow-400 font-bold text-3xl">Skill</h2>
    </div>
     <div >
    <span >
       Advertising
    </span>
    <ProgressBar percentage={95}  fillerExtraStyles={{backgroundColor:'#facc15',}} progressBarExtraStyles={{backgroundColor:'#d1d5db', height:'30px' ,width:'100%'}}/>
      </div>
      <div className='pt-3'>
    <span>
    Social Media Designs
    </span>
    <ProgressBar percentage={50} fillerExtraStyles={{backgroundColor:'#facc15',}} progressBarExtraStyles={{backgroundColor:'#d1d5db', height:'30px' ,width:'100%'}} />
    </div>
    <div className='pt-3'>
    <span >
    Print Media Designs
    </span>
    <ProgressBar percentage={65} fillerExtraStyles={{backgroundColor:'#facc15',}} progressBarExtraStyles={{backgroundColor:'#d1d5db', height:'30px' ,width:'100%'}}/>
    </div>
    <div className='pt-3'>
    <span >
    Branding
    </span>
    <ProgressBar percentage={44} fillerExtraStyles={{backgroundColor:'#facc15',}} progressBarExtraStyles={{backgroundColor:'#d1d5db', height:'30px' ,width:'100%'}}/>
    </div>
    <div className='pt-3'>
    <span >
    Logo Design
    </span>
    <ProgressBar percentage={23} fillerExtraStyles={{backgroundColor:'#facc15',}} progressBarExtraStyles={{backgroundColor:'#d1d5db', height:'30px' ,width:'100%'}}/>
    </div>
    </div>

    <div className="w-full lg:mx-7  p-6 border mt-9 mb-5 lg:mt-0 border-yellow-400 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>
      <form >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"

            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
         
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
         
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-yellow-400 text-white font-bold rounded-md `}
          
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
    
  )
}

export default Skill