import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-container',
  templateUrl: './assignment-container.component.html',
  styleUrls: ['./assignment-container.component.css']
})
export class AssignmentContainerComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumber: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  gameStarted(event) {
    if (event % 2 === 0) {
      this.evenNumber.push(event);
      console.log(event);
    } else {
      this.oddNumbers.push(event);
      console.log(event);
    }
  }

}
