import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavEventtService {

  action:EventEmitter<boolean>=new EventEmitter()
  
}
