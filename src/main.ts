import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

  window.scroll = ()=>{
    let header = document.querySelector('header');
    header?.classList.toggle('sticky', window.scrollY>120);
  }