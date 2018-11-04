import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  array : any;

  constructor(private http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  
  getApiUrl: string = "https://rickandmortyapi.com/api/character";
 
  getPosts(input) {
    console.log("sp masuk");
    return this.http.get(this.getApiUrl+'/'+input)
    

  }
}
