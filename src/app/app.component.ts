import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showValue:number=10;

  IncrementedValue(event){
    this.showValue++;
  }

  DecrementedValue(event){
    this.showValue--;
  }
  
  Reset(){
    this.showValue =10;
  }
}
