import { Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-blue-400">Dhrumil</span>
              <span className="text-gray-300"> Pipaliya</span>
            </Link>
            <p className="text-gray-400 mt-2">
              Master's Student in Computer Science
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/dhrumil-pipaliya/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/dhrumil-ui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="mailto:dp66107n@pace.edu" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                Email
              </a>
            </div>
            
            <p className="text-gray-500 text-sm flex items-center">
              <span>&copy; {currentYear} Dhrumil Pipaliya. All rights reserved.</span>
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;