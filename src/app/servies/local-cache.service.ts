import { Injectable } from '@angular/core';
import { Localstorage } from '../interface/localstorage'
@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() {
    /*     let local = { key: 'ftoh', data: 11111, expirationMins: 1 };
        this.save(local);
     */
  }

  save(options: Localstorage) {
    // Set default values for optionals
    options.expirationMins = options.expirationMins || 0
    // Set expiration date in miliseconds
    const expirationMS = options.expirationMins !== 0 ? options.expirationMins * 60 * 1000 : 0

    /* 
      1- convert data to string to be able to save 
      2- set time of delete
    */
    const record = {
      data: typeof options.data === 'string' ? options.data : JSON.stringify(options.data),
      expiration: expirationMS !== 0 ? new Date().getTime() + expirationMS : null,
    }
    localStorage.setItem(options.key, JSON.stringify(record))
  }

  load(key: string) {
    // Get cached data from localstorage
    const item = localStorage.getItem(key)
    if (item !== null) {
      const record = JSON.parse(item)
      const now = new Date().getTime()
      // Expired data will return null
      if (!record && record.expiration <= now) {
        return null
      } else {
        // console.log(record)
        return record;

      }
    }
    return null
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }

  cleanLocalStorage() {
    localStorage.clear()
  }

}
