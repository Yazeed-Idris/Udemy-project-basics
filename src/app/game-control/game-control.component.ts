import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() event = new EventEmitter<number>();
  intervalRef;
  num = 0;
  array = [];

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {

    let num = 0;
    this.intervalRef = setInterval( () => {
      this.event.emit(this.num + 1);
      this.num++;
    }, 1000, num);
    console.log("game started");
  }

  endGame() {
    clearInterval(this.intervalRef);
    console.log("game ended");
  }

  increment(num: number, eventE: EventEmitter<number>, arr) {
    console.log(num);
    eventE.emit(num);
    arr.push(num);
  }
}
