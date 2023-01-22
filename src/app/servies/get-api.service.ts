import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CacheService } from './local-cache.service';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  expirationMins: number = 5;
  time: any = new Date().getTime()
  constructor(private _httpClient: HttpClient, private _cacheService: CacheService) {
  }
  public api(mediaType: string): Observable<any> {
    console.log(this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=a6b9255a8f57674053a3e39fcf06fbe7`));
    
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=a6b9255a8f57674053a3e39fcf06fbe7`)
  }
  // save api in localStorage
  localStorageCaching(mediaType: string) {
    this.api(mediaType).subscribe(resbonse => {
      this._cacheService.remove(mediaType)
      this._cacheService.save({
        key: mediaType,
        data: resbonse,
        expirationMins: this.expirationMins,
      })
    })
    return this.api(mediaType)
  }
  // the unit the test the expira of api and speak with the ts
  controller(key: string) {
    let repo = this._cacheService.load(key) || null
    if (repo == null) {
      return this.localStorageCaching(key)
    }
    else if ((repo.expiration <= this.time)) {
      return this.localStorageCaching(key)
    }
    return of(JSON.parse(repo.data));
  }

  getOneMovie(mediaType: any, id: any): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=a6b9255a8f57674053a3e39fcf06fbe7`);

  }

  public SearchByName(keyWord:string){
    return this._httpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=a6b9255a8f57674053a3e39fcf06fbe7&query=${keyWord}`)
  }


}
