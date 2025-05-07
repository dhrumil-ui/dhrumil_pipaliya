import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { 
  Code, 
  Database, 
  LineChart, 
  LayoutGrid, 
  Cloud, 
  Boxes
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: <Code size={24} />,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'R']
  },
  {
    id: 'web',
    name: 'Web Development',
    icon: <LayoutGrid size={24} />,
    skills: ['React', 'Node.js', 'Express.js', 'HTML/CSS', 'Next.js', 'Angular', 'RESTful APIs']
  },
  {
    id: 'data',
    name: 'Data Science & ML',
    icon: <LineChart size={24} />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization', 'NLP']
  },
  {
    id: 'database',
    name: 'Databases',
    icon: <Database size={24} />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Firebase']
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: <Cloud size={24} />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions', 'Azure']
  },
  {
    id: 'other',
    name: 'Tools & Others',
    icon: <Boxes size={24} />,
    skills: ['Agile', 'JIRA', 'Unit Testing', 'UI/UX Design', 'Problem Solving', 'Data Structures', 'Algorithms']
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('languages');

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>
        
        <div className="mt-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up">
            {skillsData.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Skills Display */}
          <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            {skillsData.map(category => (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === category.id ? 'block' : 'hidden'
                }`}
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${Math.random() * 40 + 60}%` }} 
                        ></div>
                      </div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;