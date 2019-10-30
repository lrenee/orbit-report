import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  typeCount: number;
  // debCount: number = 0;
  // commCount: number = 0;
  // probeCount: number = 0;
  // posCount: number = 0;
  // statCount: number = 0;
  // teleCount: number = 0;

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countSats(satelliteType: string): number {
    this.typeCount = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (satelliteType.toLowerCase() === "communication") {
        this.typeCount += 1;
        console.log(this.typeCount);
      } else if (satelliteType.toLowerCase() === "probe") {
        this.typeCount += 1;
        console.log(this.typeCount);
      } else if (satelliteType.toLowerCase() === "space station") {
        this.typeCount += 1;
        console.log(this.typeCount);
      } else if (satelliteType.toLowerCase() === "telescope") {
        this.typeCount += 1;
        console.log(this.typeCount);
      } else if (satelliteType.toLowerCase() === "space debris") {
        this.typeCount += 1;
        console.log(this.typeCount);
      } else if (satelliteType.toLowerCase() === "positioning") {
        this.typeCount += 1;
        console.log(this.typeCount);
      }
    }
    console.log(this.typeCount);
    return this.typeCount;
  };
  
}
