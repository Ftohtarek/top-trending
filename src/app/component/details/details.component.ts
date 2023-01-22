import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from 'src/app/servies/get-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movieData: any;
  constructor(private _activeRoute: ActivatedRoute, private _api: GetApiService) { }

  ngOnInit(): void {
    let mediaType = this._activeRoute.snapshot.paramMap.get('mediaType')
    let id = this._activeRoute.snapshot.paramMap.get('id')
    this._api.getOneMovie(mediaType, id).subscribe(resbonse => {
      this.movieData = resbonse
      console.log(this.movieData);
      
    })

  }

}
