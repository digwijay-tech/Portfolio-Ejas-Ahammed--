
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-3 lg:px-auto text-white py-6 " id='footer'>
      <div className="container flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Digwijay. All rights reserved.
        </p>
        <div className="flex space-x-5">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-whatsapp fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-behance fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
