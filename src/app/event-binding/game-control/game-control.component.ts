import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() emitNum = new EventEmitter<number>();
num: number = 0;
interval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {    
    this.interval = setInterval(() => {
      this.emitNum.emit(this.num++);
    }, 1000);    
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
