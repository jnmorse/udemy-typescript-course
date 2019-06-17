import { Location } from './location';

export interface Mapable {
  location: Location;
  name: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  public addMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mapable.location,
      clickable: true,
      label: mapable.name
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mapable.markerContent()
    });

    marker.addListener('click', event => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
