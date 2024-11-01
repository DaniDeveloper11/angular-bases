import { NgModule } from "@angular/core";
import {CounterComponenet} from './components/counter/counter.component'
@NgModule({
  declarations:[
    CounterComponenet
  ],
  exports:[
    CounterComponenet
  ]
})
export class CounterModule{}
