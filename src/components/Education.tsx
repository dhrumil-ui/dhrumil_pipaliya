import SectionTitle from './SectionTitle';

interface EducationItem {
  id: number;
  school: string;
  degree: string;
  field: string;
  year: string;
  description: string;
  logo: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    school: "Pace University",
    degree: "Master of Science",
    field: "Computer Science",
    year: "2024 - 2026",
    description: "Specializing in Machine Learning and Artificial Intelligence. Coursework includes Data structures and  Algorithms, Database Management System, Computational Statistics, and Internet Computing .",
    logo: "https://seeklogo.com/images/P/pace-university-logo-6901C8F939-seeklogo.com.png"
  },
  {
    id: 2,
    school: "KJ Somaiya Institue of Technology",
    degree: "Bachelors in  Engineering",
    field: "Computer Engineering",
    year: "2020 - 2024",
    description: "Focused on core computer science fundamentals, software engineering principles,  systems design,Machine Learning and many more.  ",
    logo: "https://eas.kjsieit.com/static/media/Somaiya%20Logo.cf4b95e9.png"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Education</SectionTitle>
        
        <div className="mt-12 space-y-12">
          {educationData.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center bg-white">
                  <img 
                    src={item.logo} 
                    alt={item.school} 
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-700">{item.school}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-3">
                  {item.degree} in {item.field}
                </p>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;