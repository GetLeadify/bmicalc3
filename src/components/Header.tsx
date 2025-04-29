import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">CalculateBMI</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  location.pathname.startsWith('/blog') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/privacy" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  location.pathname === '/privacy' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link 
                to="/terms" 
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  location.pathname === '/terms' ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;