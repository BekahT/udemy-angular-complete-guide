import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-deep-dive',
  templateUrl: './directives-deep-dive.component.html',
  styleUrls: ['./directives-deep-dive.component.css']
})
export class DirectivesDeepDiveComponent implements OnInit {
  selectedDefaultColor: string = 'transparent';
  selectedHighlightColor: string = 'aquamarine';
  defaultOptions: string[] = ['transparent', 'aquamarine', 'aqua', 'chartreuse', 'yellow'];
  highlightOptions: string[] = ['aquamarine', 'aqua', 'chartreuse', 'yellow'];

  constructor() { }

  ngOnInit(): void {
  }

}
