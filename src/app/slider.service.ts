import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {
  translateY: string = 'translateY(0px)';
  slides: any[] = [
    { active: true, color: '#FFED9F' },
    { active: false, color: '#BFB277' },
    { active: false, color: '#7F774F' },
    { active: false, color: '#403B28' },
  ]
check = false;
  constructor() { }
  
  getPosition() {
    return this.slides.findIndex(slide => slide.active);
  }
  
  setTranslateY() {
    this.translateY = `translateY(-${this.getPosition() * 200}px)`
  }
  
  go(slide){
    let currentSlide = this.slides[this.getPosition()]
    currentSlide.active = false
    slide.active = true;
    this.setTranslateY()
  }
  
  next() {
    let currentSlide = this.slides[this.getPosition()]
    let nextSlide = this.slides[this.getPosition() + 1]
    if (nextSlide) {
      currentSlide.active = false;
      nextSlide.active = true;
    }
     if(!nextSlide && this.check){
      console.log('!nextSlide');
      let nextSlide = this.slides[this.getPosition() * 0];
      currentSlide.active = false;
      nextSlide.active = true;
    }
    this.setTranslateY()
  }
  
  previous() {
    let currentSlide = this.slides[this.getPosition()]
    let previousSlide = this.slides[this.getPosition() - 1]
    if (previousSlide) {
      currentSlide.active = false
      previousSlide.active = true
    }
     if(!previousSlide && this.check){
      console.log('!nextSlide');
      let sliderLenght = this.slides.length - 1;
      let previousSlide = this.slides[this.getPosition() + sliderLenght];
      currentSlide.active = false;
      previousSlide.active = true;
    }
    this.setTranslateY()
  }
  
  infinite(){
   this.check = !this.check

    //let currentSlide = this.slides[this.getPosition()]
    // let nextSlide = this.slides[this.getPosition() + 1]
    // if(!nextSlide){
    //   console.log('!nextSlide');
    //   let nextSlide = this.slides[this.getPosition() * 0];
    //   currentSlide.active = false;
    //   nextSlide.active = true;
    // }
    // if(this.getPosition() == 0){
    //   let previousSlide = this.slides[this.getPosition() + this.slides.length - 1];
    //   currentSlide.active = false;
    //   previousSlide.active = true;
    // }
    //this.setTranslateY()
  
  }

}