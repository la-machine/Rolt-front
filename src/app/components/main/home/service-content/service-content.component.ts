import { Component, OnInit } from '@angular/core';
import { Map, marker, GeoJSON } from 'leaflet';
import { UtmCoordinate } from 'src/app/classes/UtmCoordinate';
import { UTMServiceService } from 'src/app/service/utmservice.service';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent implements OnInit{
  map!: Map;
  utmCoordinates: UtmCoordinate[] = [];

  constructor(private utmDataService: UTMServiceService) {}
  ngOnInit() {
    this.initMap();
    this.utmCoordinates = this.utmDataService.getUtmCoordinates();
  }

 


  initMap() {
    // Create a Leaflet map and set the initial view
    this.map = new Map('map').setView([6.5244, 12.3665], 7); // Centered around Cameroon, adjust coordinates and zoom level accordingly

    // Load the GeoJSON data (replace 'cameroon-boundary.geojson' with your file path)
    fetch('assets/cameroon.geojson')
      .then((response) => response.json())
      .then((geojson) => {
        // Create a GeoJSON layer and add it to the map
        const cameroonLayer = new GeoJSON(geojson, {
          style: {
            color: 'blue', // Change the border color of Cameroon
            fillOpacity: 0.2,
          },
        }).addTo(this.map);

        

        // Fit the map view to the bounds of the Cameroon GeoJSON layer
        this.map.fitBounds(cameroonLayer.getBounds());
        this.utmCoordinates.forEach((coordinate) => {
          marker([coordinate.northing, coordinate.easting]).addTo(this.map);
      });
  })
  }
}
