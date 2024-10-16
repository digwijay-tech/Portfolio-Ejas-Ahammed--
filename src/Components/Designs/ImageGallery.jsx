// import gPic1 from '../../assets/img/Logos/logo-1.jpg'
// import gPic2 from '../../assets/img/Logos/logo-2.jpg'
// import gPic3 from '../../assets/img/Logos/logo-3.jpg'
// import gPic4 from '../../assets/img/Logos/logo-4.jpg'
// import gPic5 from '../../assets/img/Logos/logo-5.jpg'
import gPic6 from "../../assets/img/posters/poster-1.jpg";
import gPic7 from "../../assets/img/posters/poster-2.jpg";
import gPic8 from "../../assets/img/posters/poster-3.jpg";
import gPic9 from "../../assets/img/posters/poster-4.jpg";
import gPic10 from "../../assets/img/posters/poster-5.jpg";
// import gPic12 from '../../assets/img/posters/poster-6.jpg'
// import gPic13 from '../../assets/img/posters/poster-7.jpg'
import gPic14 from "../../assets/img/posters/poster-8.jpg";
import gPic15 from "../../assets/img/posters/poster-9.jpg";
import gPic16 from "../../assets/img/posters/poster-10.jpg";
import gPic17 from "../../assets/img/posters/poster-12.jpg";
// import gPic11 from '../../assets/img/posters/poster-11.jpg'

const ImageGallery = () => {
  return (
    <div className="lg:h-96 h-72 overflow-y-auto">
      <div className="grid grid-cols-3 md:gap-4 gap-4 p-4 ">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

const images = [
  gPic6,
  gPic8,
  gPic14,
  gPic9,
  gPic10,
  gPic7,
  gPic15,
  gPic17,
  gPic16,
];
