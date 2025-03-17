import { Component, Input, SimpleChanges } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { RouterService } from '../router.service';
import { HostListener, Inject } from "@angular/core";
// import { DOCUMENT } from '@angular/platform-browser';

declare const window: any;


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input('scrolled') scrolled: boolean | undefined;
    public contentScrolled: boolean = false;
    isHomePage: boolean =true;
    currentUrl: string='/';
    menuClicked: boolean=false;
    constructor(public router: Router, public routerService: RouterService){}

    ngOnInit(){
      this.currentUrl=this.router.url;
      this.routerService.currentUrl=this.currentUrl;
    }

    onMenuClick(){
      this.menuClicked=!this.menuClicked;
    }
    home(){
      this.router.navigate(['/'])
      this.menuClicked=false;
    }
    about(){
      this.router.navigate(['/about'])
      this.menuClicked=false;
    }
    journey(){
      this.router.navigate(['/journey'])
      this.menuClicked=false;
    }
    skills(){
      this.router.navigate(['/skills'])
      this.menuClicked=false;
    }
    portfolio(){
      this.router.navigate(['/portfolio'])
      this.menuClicked=false;
    }
    contact(){
      this.router.navigate(['/contact'])
      this.menuClicked=false;
    }


    // @HostListener("window:scroll", [])
    // onWindowScroll() {
    //   let header = document.querySelector('header');
    //   const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //   if (number > 100) {
    //     this.contentScrolled=true
    //   } else if (number <100) {
    //     this.contentScrolled=false;
    //   }
  
    // }
}
