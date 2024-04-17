import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorksComponent } from './works/works.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SocialsComponent } from './socials/socials.component';
import { HeroComponent } from './hero/hero.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EmptySpaceComponent } from './empty-space/empty-space.component';
import { NdaComponent } from './nda/nda.component';
import { GenFramComponent } from './gen-fram/gen-fram.component';
import { StuartBlueComponent } from './stuart-blue/stuart-blue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorksComponent,
    BioComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    SocialsComponent,
    HeroComponent,
    TestimonialsComponent,
    EmptySpaceComponent,
    NdaComponent,
    GenFramComponent,
    StuartBlueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
