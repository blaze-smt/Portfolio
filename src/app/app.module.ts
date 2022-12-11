import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { WorksComponent } from './works/works.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ThisPortfolioComponent } from './this-portfolio/this-portfolio.component';
import { ErrorComponent } from './error/error.component';
import { StapledHillsComponent } from './stapled-hills/stapled-hills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    WorksComponent,
    BioComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ThisPortfolioComponent,
    ErrorComponent,
    StapledHillsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
