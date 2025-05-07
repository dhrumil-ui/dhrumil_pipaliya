import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  light?: boolean;
}

const SectionTitle = ({ children, light = false }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className={`text-3xl md:text-4xl font-bold inline-block ${light ? 'text-white' : 'text-gray-800'}`}>
        {children}
      </h2>
      <div className="mt-3 flex justify-center items-center gap-2">
        <span className={`block h-1 w-12 rounded-full ${light ? 'bg-blue-300' : 'bg-blue-500'}`}></span>
        <span className={`block h-1 w-24 rounded-full ${light ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
        <span className={`block h-1 w-12 rounded-full ${light ? 'bg-blue-300' : 'bg-blue-500'}`}></span>
      </div>
    </div>
  );
};

export default SectionTitle;