import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdBarComponent } from './landingpage/components/ad-bar/ad-bar.component';
import { HeaderComponent } from './landingpage/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
