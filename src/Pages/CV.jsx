import { FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import CV from '../assets/cv.pdf'
const CurriculumVitae = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event to check when to show the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Change 300 to any value based on how much scroll you want
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleDownload = () => {
    const pdfUrl = CV; // Replace with the actual URL or path of your PDF file
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "my-Resume.pdf"; // Name of the file to be downloaded
    link.click();
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleDownload}
          className="fixed bottom-20 right-4 bg-yellow-400 text-gray-800 w-16 h-16 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
          style={{ zIndex: 50 }}
        >
          <FaDownload className="w-6 h-6" />
        </button>
      )}{" "}
    </>
  );
};

export default CurriculumVitae;
