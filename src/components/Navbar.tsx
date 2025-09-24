import { ArrowRight } from 'lucide-react';

// Modern transparent rounded navbar component
const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-14 py-4 shadow-lg">
        <div className="flex items-center justify-between w-full">
          {/* Profile Section */}
          <div className="flex items-center space-x-5 flex-shrink-0">
            {/* Profile Picture Placeholder */}
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">LB</span>
            </div>
            
            {/* Name and Title */}
            <div className="text-white">
              <h2 className="font-bold text-xl leading-tight whitespace-nowrap">Ladi Bamgbose</h2>
              <p className="text-base text-gray-300 leading-tight whitespace-nowrap">Deloitte Analyst AI | Engineering</p>
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-12 text-white font-medium">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-blue-300 transition-colors duration-200 cursor-pointer whitespace-nowrap text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-blue-300 transition-colors duration-200 cursor-pointer whitespace-nowrap text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="hover:text-blue-300 transition-colors duration-200 cursor-pointer whitespace-nowrap text-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-blue-300 transition-colors duration-200 cursor-pointer whitespace-nowrap text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resume Button */}
          <div className="flex-shrink-0">
            <a 
              href="#resume" 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center space-x-2 whitespace-nowrap text-lg"
            >
              <span>Resume</span>
              <ArrowRight className="w-8 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
