import { Component } from '@angular/core';
import mapboxgl, { Map } from 'mapbox-gl';
import { MapComponent, MarkerComponent } from 'ngx-mapbox-gl';
@Component({
  selector: 'app-root',
  imports: [MapComponent, MarkerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  onMapCreate(map: Map): void {
    // map.setConfigProperty('basemap', 'showIndoor', true)
    map.setConfig('basemap', {
      showIndoor: true
    });
    map.addControl(new mapboxgl.IndoorControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.AttributionControl());
    map.addControl(new mapboxgl.ScaleControl());
    map.addControl(new mapboxgl.GeolocateControl());
    map.addControl(new mapboxgl.FullscreenControl());
  }
}
