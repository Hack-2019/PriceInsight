import { HttpClient } from "@angular/common/http";
import { Price } from "../../../../../core/price";
import { Observable } from "rxjs";;

/**
 * Provides API data access.
 */
export class PriceService {

    constructor(
        private httpClient: HttpClient
    ) {}

    /**
     * Records a new price reading.
     * @param price The new price record.
     * @returns the new price record's unique identifier.
     */
    public recordPrice = (price: Price): Observable<string> =>
        this.httpClient.post<string>(`http://localhost:8080/price`, price);

    /**
     * Retrieves prices for the specified UPC.
     * @param upc The UPC of the product whose pricing data to retrieve.
     * @returns the pricing data for the specified UPC.
     */
    public getPricesForUPC = (upc: string): Observable<Price[]> =>
        this.httpClient.get<Price[]>(`http://localhost:8080/price/upc/${upc}`);
}