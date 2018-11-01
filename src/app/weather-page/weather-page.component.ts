import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Weather } from '../models/weather';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  sub: any;
  woeid: string = null;
  Math = Math;
  weatherInf: Weather = new Weather();

  constructor(private httpClient: HttpClient, private router: Router,
    private route: ActivatedRoute, public utilityService: UtilityService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.woeid = params['woeid'];
      this.httpClient.get(environment.SERVER_URL + 'weather.php?command=location&woeid=' + this.woeid)
        .subscribe((serverResponse: Weather) => {
          this.weatherInf = serverResponse;
          console.log(serverResponse);
        }, (err: HttpErrorResponse) => {
          console.log('err', err);
        });
    });
  }

}
