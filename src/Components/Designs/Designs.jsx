import ImageGallery from "./ImageGallery";

const Designs = () => {
  const handleOnClick = () => {
    window.open(
      "https://www.behance.net/gallery/165385483/Poster-Works",
      "_blank"
    );
  };

  return (
    <div
      className=" pt-28 px-5 md:px-12  pb-14 grid grid-cols-1 lg:grid-cols-2 gap-8 "
      id="design"
    >
      <div className="order-2 lg:order-1">
        <ImageGallery />
      </div>
      <div className="order-1 lg:order-2 ms-3">
        <h2 className="text-yellow-400 font-bold text-3xl ">My Portfolio</h2>
        <div>
          <p className="pt-6  text-white text-base lg:text-lg pb-2 lg:pb-0">
            As a graphic designer, I specialize in creating visually compelling
            works, including poster, print, and logo designs. My portfolio
            showcases a blend of creativity and professionalism, reflecting my
            commitment to delivering impactful visual solutions that meet client
            needs and elevate brand identities. For View More Designs ..
          </p>
          {/* <button className=" mt-7 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 font-bold text-xl text-gray-800 me-1 lg:me-3"> Logo Designs</button> */}
          <button
            className=" mt-7 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 font-bold text-lg text-gray-800"
            onClick={handleOnClick}
          >
            For More Designs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designs;
