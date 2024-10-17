import SlideShow from "./SlideShow";

const LogoDesign = () => {
  // const handleOnClick=()=>{
  //     window.open('https://www.behance.net/gallery/165385483/Poster-Works','_blank');
  //   }

  return (
    <div id="logo">
      <div className="lg:pt-10 px-6  pb-14  ">
        <div >
          <h2 className="text-yellow-400 font-bold text-3xl ">Logofolio</h2>
          <div className="lg:pt-10 pt-5">
            <SlideShow />
            {/* <button className=" mt-7 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 font-bold text-xl text-gray-800 me-1 lg:me-3"> Logo Designs</button> */}
            {/* <button className=" mt-7 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 font-bold text-lg text-gray-800" onClick={handleOnClick}>For More Designs</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesign;
