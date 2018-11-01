import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import {UtilityService} from './services/utility.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    WeatherPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UtilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
