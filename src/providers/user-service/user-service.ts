import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getStops(){
    return this.http.get('http://localhost:3000/api/v1/stops');
  }

  getStop(id){
    return this.http.get('http://localhost:3000/api/v1/stops/'+id);
  }
}
