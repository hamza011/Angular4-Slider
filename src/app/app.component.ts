import { Component } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { SliderService } from './slider.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    animations: [
    trigger('iconAnimation', [
        state('void', style({
            transform: 'translateY(100%)',
        })),
        transition(':enter', [
          style({ transform: 'translateY(-100%)',}),
          animate(1000, style({ transform: 'translateY(0%)',}))
        ]),
    ]),
    
  ]  
})
export class AppComponent {
  constructor(private sliderService: SliderService){
  }
}