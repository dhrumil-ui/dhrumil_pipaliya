import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  category: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "SQL Injection Detection Using Reinforcement Learning",
    description: "•	Developed a reinforcement learning model using Q-learning and a hybrid CNN-SVM architecture to detect SQL injection attacks, enhancing real-time threat detection and system security.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqW-O3-mW5pP_v3jwIDtsahcKLXgagIxtEjg&s",
    github: "https://github.com/dhrumil-ui/sqli_detection_RL",
    
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Break-Bite",
    description: "•	Engineered a mobile-first application utilizing the Flutter framework to develop a cross-platform canteen ordering system, leveraging Dart language features for UI rendering and state management.",
    technologies: ["JavaScript", "D3.js", "React", "Flutter", "API integration"],
    image: "https://tse2.mm.bing.net/th?id=OIP.nDZxYfVRglZjWlrn4aFu2QHaFj&pid=Api&P=0&h=180",
    github: "https://github.com",
    
    category: "App development"
  },
  {
    id: 4,
    title: "Natural Language Processing Chatbot",
    description: "Designed and implemented a conversational AI chatbot capable of understanding and responding to user queries in natural language.",
    technologies: ["Python", "NLTK", "TensorFlow", "Flask", "JavaScript"],
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Social Media Analytics Tool",
    description: "Developed a tool to analyze social media data and generate insights on user engagement, sentiment analysis, and trend identification.",
    technologies: ["Python", "React", "Flask", "MongoDB", "Twitter API"],
    image: "https://images.pexels.com/photos/7354752/pexels-photo-7354752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com",
    category: "Data Analysis"
  },
  {
    id: 6,
    title: "Real-time Collaborative Editor",
    description: "Built a collaborative text editor allowing multiple users to edit documents simultaneously with real-time updates.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web Development"
  }
];

const categories = Array.from(new Set(projectsData.map(project => project.category)));

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8" data-aos="fade-up">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'All'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center group">
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;