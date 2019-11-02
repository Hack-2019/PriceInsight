/**
 * Represents a price reading at a particular point-in-time.
 */
export interface Price {
  upc: number;
  price: number;
  text: string;
  retailer: string;
  recordedAt: Date;
}
