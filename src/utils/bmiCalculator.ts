import { BMIResult } from '../types';

export const calculateBMI = (
  height: number,
  weight: number,
  unit: 'metric' | 'imperial'
): BMIResult => {
  let bmi: number;

  if (unit === 'metric') {
    // Metric: weight (kg) / height^2 (m)
    bmi = weight / Math.pow(height / 100, 2);
  } else {
    // Imperial: (weight (lbs) * 703) / height^2 (inches)
    bmi = (weight * 703) / Math.pow(height, 2);
  }

  // Round to 1 decimal place
  bmi = Math.round(bmi * 10) / 10;

  return {
    bmi,
    ...getBMICategory(bmi),
  };
};

export const getBMICategory = (bmi: number): { category: string; color: string } => {
  if (bmi < 16) {
    return { category: 'Severe Thinness', color: 'text-orange-600' };
  } else if (bmi < 17) {
    return { category: 'Moderate Thinness', color: 'text-yellow-600' };
  } else if (bmi < 18.5) {
    return { category: 'Mild Thinness', color: 'text-yellow-500' };
  } else if (bmi < 25) {
    return { category: 'Normal', color: 'text-green-600' };
  } else if (bmi < 30) {
    return { category: 'Overweight', color: 'text-yellow-500' };
  } else if (bmi < 35) {
    return { category: 'Obese Class I', color: 'text-orange-500' };
  } else if (bmi < 40) {
    return { category: 'Obese Class II', color: 'text-orange-600' };
  } else {
    return { category: 'Obese Class III', color: 'text-red-600' };
  }
};

export const formatBMI = (bmi: number): string => {
  return bmi.toFixed(1);
};