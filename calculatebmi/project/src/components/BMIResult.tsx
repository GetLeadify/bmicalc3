import { BMIResult as BMIResultType } from '../types';
import { formatBMI } from '../utils/bmiCalculator';

interface Props {
  result: BMIResultType;
}

const BMICategories = [
  { range: 'Under 16', category: 'Severe Thinness', color: 'bg-orange-200' },
  { range: '16 - 17', category: 'Moderate Thinness', color: 'bg-yellow-200' },
  { range: '17 - 18.5', category: 'Mild Thinness', color: 'bg-yellow-100' },
  { range: '18.5 - 25', category: 'Normal', color: 'bg-green-200' },
  { range: '25 - 30', category: 'Overweight', color: 'bg-yellow-100' },
  { range: '30 - 35', category: 'Obese Class I', color: 'bg-orange-100' },
  { range: '35 - 40', category: 'Obese Class II', color: 'bg-orange-200' },
  { range: 'Over 40', category: 'Obese Class III', color: 'bg-red-200' },
];

const BMIResult: React.FC<Props> = ({ result }) => {
  const getResultDescription = (category: string): string => {
    switch (category) {
      case 'Severe Thinness':
      case 'Moderate Thinness':
      case 'Mild Thinness':
        return 'You may be underweight. Consider consulting with a healthcare provider for personalized advice.';
      case 'Normal':
        return 'Your BMI is within the healthy weight range. Maintain a balanced diet and regular physical activity.';
      case 'Overweight':
        return 'You may have a slightly elevated health risk. Consider lifestyle changes like improved diet and increased activity.';
      case 'Obese Class I':
      case 'Obese Class II':
      case 'Obese Class III':
        return 'Your BMI indicates an increased health risk. We recommend consulting with a healthcare provider for guidance.';
      default:
        return 'Consult with a healthcare provider for personalized advice based on your BMI.';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Your Results</h3>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <span className="text-gray-600">Your BMI</span>
          <span className={`text-2xl font-bold ${result.color}`}>
            {formatBMI(result.bmi)}
          </span>
        </div>
        
        <div className="mb-5">
          <div className="text-gray-600 mb-2">Category: <span className={`font-medium ${result.color}`}>{result.category}</span></div>
          <p className="text-gray-700 text-sm">
            {getResultDescription(result.category)}
          </p>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">BMI Categories</h4>
          
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden flex mb-2">
            {BMICategories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`${cat.color} h-full`}
                style={{ width: `${idx === 0 || idx === BMICategories.length - 1 ? '12.5%' : '12.5%'}` }}
              />
            ))}
          </div>
          
          <div className="relative h-6">
            {/* BMI Marker */}
            <div 
              className="absolute top-0 h-4 w-4 bg-blue-600 rounded-full -mt-3 -ml-2 shadow-md transform transition-all duration-500 ease-in-out"
              style={{ 
                left: `${Math.min(Math.max((result.bmi / 50) * 100, 0), 100)}%` 
              }}
            />
            
            {/* BMI Range Labels */}
            <div className="flex justify-between text-xs text-gray-500 absolute w-full">
              <span>0</span>
              <span>50+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMIResult;