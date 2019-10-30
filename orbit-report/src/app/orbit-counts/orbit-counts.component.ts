import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  totCount: number = 0;
  debCount: number = 0;
  commCount: number = 0;
  probeCount: number = 0;
  posCount: number = 0;
  statCount: number = 0;
  teleCount: number = 0;

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countSats(): number {
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites.type.toLowerCase() === "communication") {
        this.commCount += 1;
      } else if (this.satellites.type.toLowerCase() === "probe") {
        this.probeCount += 1;
      } else if (this.satellites.type.toLowerCase() === "space station") {
        this.statCount += 1;
      } else if (this.satellites.type.toLowerCase() === "telescope") {
        this.teleCount += 1;
      } else if (this.satellites.type.toLowerCase() === "space debris") {
        this.debCount += 1;
      } else if (this.satellites.type.toLowerCase() === "positioning") {
        this.posCount += 1;
      }
    }
    this.totCount = this.satellites.length;
    return;
  };
  
}
