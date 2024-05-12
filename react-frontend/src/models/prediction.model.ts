export interface Prediction {
  id: number;
  userId: number;
  stockSymbol: string;
  predictedPrice: number;
  confidenceLevel: number;
  predictionDate: Date;
  targetDate: Date;
}
