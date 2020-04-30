import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingObservatoireComponent} from './landing-observatoire/landing-observatoire.component';

const appRoutes: Routes = [
  { path: '', component: LandingObservatoireComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingObservatoireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
