import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import * as L from 'leaflet';

const INITIAL_OPACITY = 1;
const DIMMED_OPACITY = 0.3;

@Component({
  selector: 'map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {
  private map;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      invalidateSize: true
    });
    tiles.addTo(this.map);


  }
  ngOnDestroy() {
    var container = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }
    this.map.innerHTML = '<div id="map" class="map"></div>';
    // console.log("this is map ", this.map);
    // if (this.map) {
    //   this.map.remove();
    //   console.log("map removed ", this.map)
    // }
  }
  private initMap(): void {
    // console.log('map', this.map);
    // var container = L.DomUtil.get('map');
    // if(container == null){
    //   container._leaflet_id = null;
    // }

    this.map = L.map('map').setView([37.977, 23.650], 14);

  }
}
