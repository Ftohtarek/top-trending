import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/servies/approval.service';
import { GetApiService } from 'src/app/servies/get-api.service';
import { NavEventtService } from 'src/app/servies/nav-eventt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // intitation the container of api
  movieApi: any;
  tvApi: any;
  test:any ={
    'one':{'ele':1},
    "two":{'ele':2},
    "three":{'ele':3}
  }
  constructor(private _getApi: GetApiService, private _approval: ApprovalService ,private _navEvent:NavEventtService) {
    Object.values(this.test).forEach((element:any)=>{
      console.log(element.ele);
    })
   }
  // return by observal resbonse follow it here and filter indepand on media type

  private getTrending() {
    this._getApi.controller('all').subscribe(resbonse => {
      this.movieApi = this._approval.filterApi(resbonse.results, 'movie');
      this.tvApi = this._approval.filterApi(resbonse.results, 'tv');
    })
  }

  // fire function here
  ngOnInit(): void {
    this.getTrending();
    this._navEvent.action.emit(true)
  }

}
