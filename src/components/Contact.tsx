import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <SectionTitle light>Contact Me</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-blue-200 mb-8">
              Feel free to contact me for any inquiries, collaboration opportunities, or just to say hello. 
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail size={24} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Email</h4>
                  <a href="mailto:dp66107n@pace.edu" className="text-blue-200 hover:text-white transition-colors">
                    dp66107n@pace.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone size={24} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Phone</h4>
                  <a href="tel:+1(201)920-1944" className="text-blue-200 hover:text-white transition-colors">
                    +1 (201) 920-1944
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin size={24} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Location</h4>
                  <p className="text-blue-200">
                    Jersey city, New Jersey, USA
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/dhrumil-pipaliya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} className="text-blue-300" />
                </a>
                <a 
                  href="https://github.com/dhrumil-ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} className="text-blue-300" />
                </a>
                
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-blue-200 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-md text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Dhrumil Pipaliya"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-blue-200 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-md text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="dhrumilpipaliya@gmail.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-blue-200 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-md text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Job Opportunity"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-blue-200 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-md text-white placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
                >
                  <span>Send Message</span>
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;