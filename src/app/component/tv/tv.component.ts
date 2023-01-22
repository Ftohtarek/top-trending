import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/servies/get-api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvShows: any;
  constructor(private _api: GetApiService) { }

  ngOnInit(): void {
    this._api.controller('tv').subscribe(resbonse => {
      this.tvShows = resbonse['results']
    })
  }

}
