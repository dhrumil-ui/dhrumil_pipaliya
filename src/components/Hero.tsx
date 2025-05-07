import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTI0IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-aos="fade-up">
            Dhrumil Pipaliya
          </h1>
          <div className="text-xl md:text-2xl text-blue-200 mb-6 h-16" data-aos="fade-up" data-aos-delay="100">
            <TypeAnimation
              sequence={[
                'Master\'s in Computer Science', 
                1500,
                'Software Developer', 
                1500,
                'ML Enthusiast',
                1500,
                'Problem Solver',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mt-8" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 flex items-center justify-center"
            >
              Contact Me
            </a>
            <a 
              href="dhrumilpipaliya_softwaredeveloper.docx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md transition duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center" data-aos="fade-left">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img 
              src="dhrumil pfp.jpg" 
              alt="Dhrumil Pipaliya" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <ChevronDown size={32} className="text-white" />
      </Link>
    </section>
  );
};

export default Hero;