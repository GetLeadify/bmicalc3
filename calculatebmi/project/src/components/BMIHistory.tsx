import { useState } from 'react';
import { History, Trash2 } from 'lucide-react';
import { getBMIHistory, clearBMIHistory } from '../utils/localStorage';
import { formatBMI } from '../utils/bmiCalculator';
import { BMIHistoryItem } from '../types';

const BMIHistory: React.FC = () => {
  const [history, setHistory] = useState<BMIHistoryItem[]>(getBMIHistory());

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your BMI history?')) {
      clearBMIHistory();
      setHistory([]);
    }
  };

  if (history.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatHeight = (height: number, unit: 'metric' | 'imperial'): string => {
    if (unit === 'metric') {
      return `${height} cm`;
    } else {
      const feet = Math.floor(height / 12);
      const inches = Math.round(height % 12);
      return `${feet}'${inches}"`;
    }
  };

  return (
    <div className="mt-8 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <History className="h-5 w-5 mr-2 text-blue-600" />
          Your BMI History
        </h3>
        
        <button
          onClick={handleClear}
          className="text-sm text-red-600 hover:text-red-700 flex items-center transition-colors"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Clear History
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BMI</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-600">{formatDate(item.date)}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">{formatBMI(item.bmi)}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${item.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {formatHeight(item.height, item.unit)} / {item.weight} {item.unit === 'metric' ? 'kg' : 'lbs'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BMIHistory;