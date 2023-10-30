import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';

const landingPageRoutes: Routes = [
  {
    path: 'landingpage',
    component: LandingpageComponent,
  },
];

@NgModule({
  declarations: [LandingpageComponent],
  imports: [CommonModule, RouterModule.forChild(landingPageRoutes)],
})
export class LandingpageModule {}
