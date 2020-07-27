import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes'

//Services
import { HeroesServices } from './services/heroes.services'

//Components
import { AppComponent } from './app.component';
import { Header } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailComponent } from './detail/detail.component';
import { ResultComponent } from './result/result.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    DetailComponent,
    ResultComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
