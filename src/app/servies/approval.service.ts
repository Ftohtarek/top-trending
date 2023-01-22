import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor() { }
  public filterApi(resbonse: any, type: string) {
    return resbonse.filter((item: any) => {
      return item.media_type == type;
    })
  }
}
