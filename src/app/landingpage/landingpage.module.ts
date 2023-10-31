import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';
import { AdBarComponent } from './components/ad-bar/ad-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { SliderComponent } from './components/slider/slider.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';

const landingPageRoutes: Routes = [
  {
    path: 'landingpage',
    component: LandingpageComponent,
  },
];

@NgModule({
  declarations: [
     LandingpageComponent,
     AdBarComponent,
     HeaderComponent,
     MenuComponent,
     MainComponent,
     SliderComponent,
     ServicesComponent,
     AboutComponent
    ],
  imports: [CommonModule, RouterModule.forChild(landingPageRoutes)],
})
export class LandingpageModule {}
