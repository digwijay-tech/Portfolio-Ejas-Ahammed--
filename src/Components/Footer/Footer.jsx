
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-3 lg:px-auto text-white py-6 " id='footer'>
      <div className="container flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ejas Ahammed. All rights reserved.
        </p>
        <div className="flex space-x-5">
        <a
            href="https://www.behance.net/ejasak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-behance fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/ijasahmmed_?igsh=Mzl5Z2lmc2F4dG5o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
         
          <a
            href="https://www.linkedin.com/in/ejas-ahammed-ak-37596822a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
