import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { NbSidebarModule, NbLayoutModule, NbThemeModule, NbCardModule, NbListModule, NbInputModule, NbSelectComponent, NbSelectModule } from '@nebular/theme';
import { WeatherService } from './weather/weather.service';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { RouteCardComponent } from './routes/route-card/route-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    RouteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbInputModule,
    HttpClientModule,
    FormsModule,
    NbSelectModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
