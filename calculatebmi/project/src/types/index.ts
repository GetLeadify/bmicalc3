export interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

export interface BMIHistoryItem extends BMIResult {
  id: string;
  date: string;
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
}