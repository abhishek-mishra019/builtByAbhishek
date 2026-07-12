import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { RouterService } from './router.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPosition=window.pageYOffset;
  title = 'portfolio';
  contentScrolled: boolean=false;
  constructor(public routerService: RouterService){
  }
  isIOSDevice: boolean= false;
  currentBGColor:any;
   ngOnInit(){
    console.log(this.currentPosition);
    this.currentBGColor=  this.routerService.currentBodyBG;
    this.routerService.observeBackgroundColor();
  }
  
  onScroll(event: any) {
      let scroll = event.target.scrollTop;
      if (scroll > 0) {
        this.contentScrolled=true;
      } 
      else{
        this.contentScrolled=false;
      }
  }

}
