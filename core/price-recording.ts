import { RecordingType } from "./recording-type";
import { Category } from "./category";

/**
 * Represents a price reading at a particular point-in-time.
 */
export interface PriceRecording {
  id: string;
  /** How this price recording was acquired. */
  type: RecordingType;
  /** Confidence in price accuracy. */
  confidence: number;
  /** The product's globally-unique UPC. */
  upc: string;
  /** The product's descriptive text. */
  description: string;
  /** Any associated product categories. */
  categories: Category[];
  /** When this product price was recorded. */
  recordedAt: Date;
  /** The unique ID of the user who recorded the price. */
  recordedByUserId: string;
}
