import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { MyJourneyComponent } from './body/my-journey/my-journey.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { ContactComponent } from './body/contact/contact.component';
import { ServicesComponent } from './body/services/services.component';
import { SkillsComponent } from './body/skills/skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: "Abhishek's Portfolio"},
  {path: 'about', component: AboutComponent},
  {path: 'journey', component: MyJourneyComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
