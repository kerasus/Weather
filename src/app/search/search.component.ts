import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sub: any;
  keyword = '';
  keywordParam = '';
  searchMessage = '';

  searchResult: Array<{
    latt_long: string,
    location_type: string,
    title: string,
    woeid: number
  }> = [];

  constructor(private httpClient: HttpClient, private router: Router,
    private route: ActivatedRoute) {

  }


  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.keywordParam = params['keyword'];
      if (this.keyword !== this.keywordParam) {
        this.searchKeyword(this.keywordParam);
      }
      this.keyword = this.keywordParam;
    });

    this.searchResult = JSON.parse(localStorage.getItem('searchResult'));
  }

  searchKeyword(keyword) {
    if (keyword.length !== 0 ) {
      this.searchMessage = 'waiting ...';
      this.httpClient.get<any>(environment.SERVER_URL + 'weather.php?command=search&keyword=' + keyword)
      .subscribe(serverResponse => {
        if (serverResponse.length > 0) {
          this.searchMessage = '';

          this.keyword = this.keywordParam;
          this.searchResult = serverResponse;
          localStorage.setItem('searchResult', JSON.stringify(serverResponse));

          this.router.navigate(['/search/' + keyword]).then(() => {});

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
