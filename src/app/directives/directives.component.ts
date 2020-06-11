import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showDetails: Boolean = false;
  numClicks: number = 0;
  messages: Array<any> = []; 

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.showDetails ? this.showDetails = false : this.showDetails = true;
    this.messages.push(++this.numClicks + ": " + new Date());
  }
}
