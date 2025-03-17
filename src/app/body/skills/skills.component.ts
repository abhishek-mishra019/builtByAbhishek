import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../../router.service';

declare var VANTA: any;
@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  currentUrl: any='';
  constructor(public router: Router, public routerService: RouterService){}

  ngOnInit(){
    this.currentUrl=this.router.url;
    this.routerService.currentUrl=this.currentUrl;
    this.routerService.observeBackgroundColor();
      VANTA.NET({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 15.00,
        spacing: 25.00,
        color: 0x00abf0,
        backgroundColor: 0x081b29,
        showDots: true
      })
  }
}
