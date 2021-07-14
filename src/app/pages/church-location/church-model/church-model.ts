export class ChurchModel{
    churchName : string;
    pastorName: string;
        address: string;
        state: string;
        country : string;
        about : string;
        number : string;
        disciples : string;
        region : string;
        distance : number;
        churchLat : number;
        churchLng : number;
        id? : number

    constructor(
        churchName: string,
        pastorName: string,
        address: string,
        state: string,
        country : string,
        about : string,
        number : string,
        disciples : string,
        region : string,
        distance : number,
        churchLat : number,
        churchLng : number,
        id? : number,
        ){
            this.churchName = churchName;
            this.pastorName = pastorName;
            this.address = address;
            this.state = state;
            this.country = country;
            this.about = about;
            this.number = number;
            this.disciples = disciples;
            this.region = region;
            this.distance = distance;
            this.churchLat = churchLat;
            this.churchLng = churchLng;
            this.id = id;            
        }
    
}