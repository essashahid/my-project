export interface HistoricalData {
  id: number;
  stockSymbol: string;
  date: Date;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}
