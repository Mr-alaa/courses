import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landingpage',
    loadChildren: () =>
      import('./landingpage/landingpage.module').then(
        (m) => m.LandingpageModule
      ),
  },
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
