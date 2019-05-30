import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { SidenavComponent } from './Components/Layout/sidenav/sidenav.component';
import { MainComponent } from './Components/Layout/main/main.component';
import { PtsearchComponent } from './Components/NPR/ptsearch/ptsearch.component';
import { WardviewComponent } from './Components/NPR/wardview/wardview.component';
import { AeviewComponent } from './Components/NPR/aeview/aeview.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'ptsearch', component: PtsearchComponent },
  { path: 'wardview', component: WardviewComponent },
  { path: 'aeview', component: AeviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidenavComponent,
    MainComponent,
    PtsearchComponent,
    WardviewComponent,
    AeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
