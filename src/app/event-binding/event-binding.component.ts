import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  nums: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onEmitNum(emittedNum: number){
    this.nums.push(emittedNum);
  }

}
