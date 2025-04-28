import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} CalculateBMI.xyz. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-xs flex items-center justify-center">
          <span>Made with</span>
          <Heart className="h-3 w-3 mx-1 text-red-500 inline" />
          <span>for your health</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;