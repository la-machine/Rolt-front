import { Injectable } from '@angular/core';
import { UtmCoordinate } from '../classes/UtmCoordinate';

@Injectable({
  providedIn: 'root'
})


export class UTMServiceService {
// Sample UTM coordinates for land parcels (replace with your data)
  utmCoordinates: UtmCoordinate[]= [
    { easting: 123456, northing: 987654 },
    { easting: 234567, northing: 876543 },
    // Add more coordinates as needed
  ];

  constructor() {}

  getUtmCoordinates() {
    return this.utmCoordinates;
  }
}
