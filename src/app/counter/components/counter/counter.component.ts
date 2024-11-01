import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetBy(10)">Reset</button>
<button (click)="increaseBy(-1)">-1</button>

<hr>
  `
})

export class CounterComponenet {

  public title:string = 'Mi primera app de angular';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value ;
  }
  // decreseBy(value:number):void{
  //   this.counter-=value;
  // }
  resetBy(value:number):void{
    this.counter = value
  }


}
