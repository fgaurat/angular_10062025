import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { IncComponent } from './inc-component/inc-component';
import { ShowComponent } from './show-component/show-component';

@Component({
  selector: 'app-root',
  imports: [IncComponent,ShowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'signal-counter-app';
  count:WritableSignal<number> = signal(0)
  
  doubleCount: Signal<number> = computed(
      () => this.count() * 2
  );
  
  inc(){
    this.count.update(value => value+1)
  }


  constructor(){
    effect(()=>{
      console.log(`count: ${this.count()}`)
    })

    effect(()=>{
      console.log(`doubleCount: ${this.doubleCount()}`)
    })
  
  }
}
