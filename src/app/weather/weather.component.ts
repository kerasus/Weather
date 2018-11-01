import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Weather } from '../models/weather';
import { UtilityService } from '../services/utility.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  Math = Math;
  weatherInf: Weather = new Weather();

  @Input() showtype: string;
  @Input() woeid: string;

  constructor(private httpClient: HttpClient, private router: Router, public utilityService: UtilityService) {

  }

  ngOnInit() {
    this.httpClient.get(environment.SERVER_URL + 'weather.php?command=location&woeid=' + this.woeid)
      .subscribe((serverResponse: Weather) => {
         this.weatherInf = serverResponse;
      }, (err: HttpErrorResponse) => {
        console.log('err', err);
      });
  }

  showForecast(weatherInf) {
    this.router.navigate(['/weather/' + weatherInf.woeid]).then(() => {});
  }
}
