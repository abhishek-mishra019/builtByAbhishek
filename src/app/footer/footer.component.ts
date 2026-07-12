import { Component } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentBackground: string = '';
  constructor(public routerService: RouterService){}
}
