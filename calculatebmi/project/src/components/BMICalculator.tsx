import { useState, useEffect } from 'react';
import { Activity, Scale, MoveVertical, RotateCw } from 'lucide-react';
import { calculateBMI } from '../utils/bmiCalculator';
import { saveBMIToHistory } from '../utils/localStorage';
import BMIResult from './BMIResult';
import { BMIResult as BMIResultType } from '../types';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<BMIResultType | null>(null);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

  // Reset values when unit changes
  useEffect(() => {
    setHeight('');
    setFeet('');
    setInches('');
    setWeight('');
    setResult(null);
    setIsCalculated(false);
  }, [unit]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (unit === 'metric' && (!height || !weight)) return;
    if (unit === 'imperial' && (!feet || !weight)) return;
    
    let heightVal: number;
    const weightVal = parseFloat(weight);
    
    if (unit === 'metric') {
      heightVal = parseFloat(height);
    } else {
      // Convert feet and inches to total inches
      const feetVal = parseFloat(feet);
      const inchesVal = parseFloat(inches || '0');
      heightVal = (feetVal * 12) + inchesVal;
    }
    
    if (isNaN(heightVal) || isNaN(weightVal)) return;
    
    const bmiResult = calculateBMI(heightVal, weightVal, unit);
    setResult(bmiResult);
    setIsCalculated(true);
    
    // Save to history
    saveBMIToHistory({
      ...bmiResult,
      height: heightVal,
      weight: weightVal,
      unit,
    });

    // Trigger animation
    setAnimation(true);
    setTimeout(() => setAnimation(false), 500);
  };

  const handleInchesChange = (value: string) => {
    const numValue = parseInt(value);
    if (value === '') {
      setInches('');
    } else if (!isNaN(numValue) && numValue >= 0 && numValue <= 11) {
      setInches(numValue.toString());
    }
  };

  const handleFeetChange = (value: string) => {
    const numValue = parseInt(value);
    if (value === '') {
      setFeet('');
    } else if (!isNaN(numValue) && numValue >= 1 && numValue <= 8) {
      setFeet(numValue.toString());
    }
  };

  const reset = () => {
    setHeight('');
    setFeet('');
    setInches('');
    setWeight('');
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="px-6 py-5 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Activity className="mr-2 h-5 w-5" />
          BMI Calculator
        </h2>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setUnit('metric')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              unit === 'metric'
                ? 'bg-white text-blue-600 font-medium'
                : 'bg-blue-600 text-white/80 hover:text-white'
            }`}
          >
            Metric
          </button>
          <button
            type="button"
            onClick={() => setUnit('imperial')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              unit === 'imperial'
                ? 'bg-white text-blue-600 font-medium'
                : 'bg-blue-600 text-white/80 hover:text-white'
            }`}
          >
            Imperial
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleCalculate}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <MoveVertical className="h-4 w-4 mr-1 text-gray-500" />
              Height {unit === 'metric' ? '(cm)' : ''}
            </label>
            {unit === 'metric' ? (
              <input
                type="number"
                step="0.1"
                min="1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="e.g., 175"
                required
              />
            ) : (
              <div className="flex space-x-2">
                <div className="flex-1">
                  <label htmlFor="feet" className="block text-xs text-gray-600 mb-1">Feet</label>
                  <input
                    type="number"
                    id="feet"
                    min="1"
                    max="8"
                    value={feet}
                    onChange={(e) => handleFeetChange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="5"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">1-8 ft</p>
                </div>
                <div className="flex-1">
                  <label htmlFor="inches" className="block text-xs text-gray-600 mb-1">Inches</label>
                  <input
                    type="number"
                    id="inches"
                    min="0"
                    max="11"
                    value={inches}
                    onChange={(e) => handleInchesChange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="7"
                  />
                  <p className="mt-1 text-xs text-gray-500">0-11 in</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Scale className="h-4 w-4 mr-1 text-gray-500" />
              Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
            </label>
            <input
              type="number"
              id="weight"
              step="0.1"
              min="1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
              required
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              className={`flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors font-medium ${
                animation ? 'animate-pulse' : ''
              }`}
            >
              Calculate BMI
            </button>
            
            <button
              type="button"
              onClick={reset}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors"
            >
              <RotateCw className="h-5 w-5" />
            </button>
          </div>
        </form>
        
        {isCalculated && result && (
          <div className="mt-6 animate-fadeIn">
            <BMIResult result={result} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;