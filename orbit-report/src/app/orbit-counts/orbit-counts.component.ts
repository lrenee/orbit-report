import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  typeCount: number;
  satTypes: ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
  
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countSats(satelliteType: string): number {
    this.typeCount = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === satelliteType.toLowerCase()) {
        this.typeCount += 1;
      }
    }  
    return this.typeCount;
  };
  
}
