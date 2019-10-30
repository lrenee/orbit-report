import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  totCount: number = 0;
  debCount: number = 0;
  commCount: number = 0;
  probeCount: number = 0;
  posCount: number = 0;
  statCount: number = 0;
  teleCount: number = 0;


  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

         let fetchedSatellites = data.satellites;
         for (let i = 0; i < fetchedSatellites.length; i++) {
           let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
           this.sourceList.push(satellite);           
         }
         this.displayList = this.sourceList.slice(0);
         this.countSats();
         
      }.bind(this));
   }.bind(this));

    // this.sourceList = [
    //    new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
    //    new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
    //    new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
    //    new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
    //    new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
    // ];
 }

 search(searchTerm: string): void {
   let matchingSatellites: Satellite[] = [];
   searchTerm = searchTerm.toLowerCase();
   for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
       matchingSatellites.push(this.sourceList[i]);
     }
    }
    this.displayList = matchingSatellites;
    this.countSats();
 }

 countSats(): number {
  for (let i = 0; i < this.displayList.length; i++) {
    if (this.displayList[i].type.toLowerCase() === "communication") {
      this.commCount += 1;
    } else if (this.displayList[i].type.toLowerCase() === "probe") {
      this.probeCount += 1;
    } else if (this.displayList[i].type.toLowerCase() === "space station") {
      this.statCount += 1;
    } else if (this.displayList[i].type.toLowerCase() === "telescope") {
      this.teleCount += 1;
    } else if (this.displayList[i].type.toLowerCase() === "space debris") {
      this.debCount += 1;
    } else if (this.displayList[i].type.toLowerCase() === "positioning") {
      this.posCount += 1;
    }
  }
  this.totCount = this.displayList.length;
  return;
};

}
