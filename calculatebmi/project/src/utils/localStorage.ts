import { BMIHistoryItem } from '../types';

const BMI_HISTORY_KEY = 'bmi_history';

export const saveBMIToHistory = (bmiItem: Omit<BMIHistoryItem, 'id' | 'date'>): void => {
  const history = getBMIHistory();
  
  const newItem: BMIHistoryItem = {
    ...bmiItem,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
  };
  
  history.unshift(newItem);
  
  // Keep only the last 10 calculations
  if (history.length > 10) {
    history.pop();
  }
  
  localStorage.setItem(BMI_HISTORY_KEY, JSON.stringify(history));
};

export const getBMIHistory = (): BMIHistoryItem[] => {
  const history = localStorage.getItem(BMI_HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};

export const clearBMIHistory = (): void => {
  localStorage.removeItem(BMI_HISTORY_KEY);
};