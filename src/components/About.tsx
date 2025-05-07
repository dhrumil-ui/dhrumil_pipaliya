import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="bg-gradient-to-tr from-blue-100 to-blue-50 p-1 rounded-lg shadow-lg">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Who am I?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I'm Dhrumil Pipaliya, a Computer Science Master's student with a passion for software development, 
                  machine learning, and building innovative solutions to complex problems.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With experience in full-stack development, data analysis, and research, I blend technical expertise 
                  with creative problem-solving skills to create impactful technology solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm constantly exploring new technologies and methodologies to expand my skill set and stay at the 
                  forefront of technological innovation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Education</h4>
                <p className="text-gray-700">Master's in Computer Science with specialization in Machine Learning and AI</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Experience</h4>
                <p className="text-gray-700">Software Engineer with industry experience in developing scalable applications</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Research</h4>
                <p className="text-gray-700">Involved in research projects focusing on ML algorithms and applications</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">Goals</h4>
                <p className="text-gray-700">Aspiring to contribute to cutting-edge tech that makes a positive impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;