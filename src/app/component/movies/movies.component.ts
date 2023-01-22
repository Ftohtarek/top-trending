import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/servies/get-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any;
  constructor(private _api: GetApiService) { }

  ngOnInit(): void {
    this._api.controller('movie').subscribe(resbonse => {
      this.movies = resbonse['results']
    })
  }

}
