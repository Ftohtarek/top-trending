import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/servies/get-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // 
  movieApi: any;
  movieName: string = '';
  view: boolean = false;
  constructor(private _getApi: GetApiService) { }

  public getMovie(event: any) {
    this.view = true
    this.movieName = event.target.value;
    if (this.movieName == "") {
      this.movieApi = []
      this.view = false
      return;
    }
    this._getApi.SearchByName(this.movieName).subscribe((resbonse: any) => {
      this.movieApi = resbonse.results;
      console.log(this.movieApi);
      
    })
  }

  ngOnInit(): void {
  }
}
