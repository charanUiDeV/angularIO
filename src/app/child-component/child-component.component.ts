import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Input() value:string;
@Output() Increment : EventEmitter<number> =new EventEmitter();
@Output() Decrement: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  IncrementNumber(){
   this.Increment.emit();
  }
  
  DecrementNumber(){
    this.Decrement.emit();
  }
  

}
