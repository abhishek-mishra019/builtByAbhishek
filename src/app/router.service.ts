import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  public currentUrl: string = '/';
  public currentFooterBG: string = 'var(--second-bg-color)';
  public currentBodyBG: string = ''
  // public isIOSDevice: boolean = false;
  constructor(public router: Router) { 
    this.currentUrl=this.router.url;
  }
  
  observeBackgroundColor(){
    if(this.currentUrl== '/journey' || this.currentUrl=='/portfolio'){
      this.currentFooterBG='var(--bg-color)';
      // this.currentBodyBG="var(--second-bg-color)"
    }
    else{
      this.currentFooterBG='var(--second-bg-color)';
      // this.currentBodyBG="var(--bg-color)"
    }
  }
}
