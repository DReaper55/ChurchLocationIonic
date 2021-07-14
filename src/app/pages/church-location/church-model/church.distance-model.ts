export class ChurchDistance {
  churchName: string;
  distance: number;
  churchLat: number;
  churchLng: number;

  constructor(churchName: string, distance: number, churchLat: number, churchLng: number) {
    this.churchName = churchName;
    this.distance = distance;
    this.churchLat = churchLat;
    this.churchLng = churchLng;
  }
}
