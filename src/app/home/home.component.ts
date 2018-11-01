import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keyword = '';
  searchMessage = '';

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  ngOnInit() {
    // // Istanbul
    // this.httpClient.get(environment.SERVER_URL + 'weather.php?command=location&woeid=2344116')
    //   .subscribe((serverResponse: Weather) => {
    //     console.log(serverResponse);
    //      this.weatherInf_Istanbul = serverResponse;
    //   }, (err: HttpErrorResponse) => {
    //     console.log('err', err);
    //   });


  }


  searchKeyword() {
    if (this.keyword.length !== 0 ) {
      this.searchMessage = 'waiting ...';
      this.httpClient.get<any>(environment.SERVER_URL + 'weather.php?command=search&keyword=' + this.keyword)
      .subscribe(serverResponse => {
        if (serverResponse.length > 0) {
          this.searchMessage = '';

          this.router.navigate(['/search/' + this.keyword]).then(() => {
            localStorage.setItem('searchResult', JSON.stringify(serverResponse));
          });
        } else {
          this.searchMessage = 'No results were found. Try changing the keyword!';
        }
      }, (err: HttpErrorResponse) => {
        console.log('err', err);
        this.searchMessage = 'problem in search. try again.';
      });
    } else {
      this.searchMessage = 'please enter keyword';
    }
  }

}
