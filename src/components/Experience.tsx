import SectionTitle from './SectionTitle';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  logo: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Goldenmace IT Solutions",
    position: "Web developer",
    duration: "June 2023 - August 2023",
    description: [
      "Built responsive full-stack web applications using React.js for dynamic UIs and Node.js/Express or Flask for scalable RESTful APIs",
      "Integrated payment gateways like Stripe to enable secure online transactions with backend webhook handling and real-time status updates.",
      "Implemented secure user authentication systems using JWT, bcrypt, and role-based access control for protected routes and session management.",
      "Utilized JSON for data exchange between the frontend and backend, especially for sending user input to the server and rendering dynamic responses."
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFUtQhxTFxXHQ/company-logo_200_200/company-logo_200_200/0/1631308021181?e=2147483647&v=beta&t=EfzaFA1PZeiVOckXl2X9unszvu3JBbtG-Eqrd4O8Mag"
  },
  {
    id: 2,
    company: "TechSolutions Inc.",
    position: "Software Engineer Intern",
    duration: "May 2024 - Aug 2024",
    description: [
      "Developed and maintained full-stack web applications using React.js and Node.js",
      "Implemented RESTful APIs and optimized database queries for improved performance",
      "Collaborated with cross-functional teams to design and implement new features",
      "Participated in code reviews and implemented best practices for code quality"
    ],
    logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>Work Experience</SectionTitle>
        
        <div className="mt-12">
          <div className="relative border-l-4 border-blue-600 ml-6 pl-12 space-y-10">
            {experienceData.map((item, index) => (
              <div 
                key={item.id} 
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Circle on timeline */}
                <div className="absolute -left-[4.5rem] mt-1.5 w-10 h-10 rounded-full border-4 border-white bg-blue-600 shadow-xl flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src={item.logo} 
                      alt={item.company} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-700">{item.company}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium mt-2 sm:mt-0">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-3">{item.position}</p>
                  <ul className="space-y-2 text-gray-600">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;