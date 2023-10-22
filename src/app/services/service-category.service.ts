import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {
  user: any ;

  url = 'https://localhost:7091/api/Category';

  GetAllCategory(){
    return this.httpClient.get<any>(this.url);
  }

  sendRequest(url: string, method = 'GET', data: any = {}): any {
    const httpParams = new HttpParams({ fromObject: data });
    const httpOptions = { withCredentials: true, body: httpParams };
    let result;
    let myData = JSON.stringify(data);

    const headers = new HttpHeaders()
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*');

    switch (method) {

      case 'GET':
        return this.httpClient.get(`${this.url}/GetAll` , {headers}).toPromise()
          .then((data: any) => (method == 'GET' ? data.data : data))
      case 'PUT':
        result = this.httpClient.put(url, httpParams, httpOptions);
        break;

      case 'POST':
        let myCategory = JSON.stringify(data);
        result = this.httpClient.post(`${this.url}` , myCategory ,{headers})
          .toPromise()
          .then(function(data) {
            throw 'Some error';
          }).catch(function (err) {
            alert(err.error.errorMessage ) // will output 'Some error'
          }).then(function () {
            console.log('- - - -');
            // This will run even though we have a catch before
          });
        break;

      case 'DELETE':
        let myId = JSON.stringify(data.key.categoryId);

        result = this.httpClient.delete(`${this.url}/${myId}` , {headers})
          .toPromise()
          .then(function(data) {
            throw 'Some error';
          }).catch(function (err) {
            alert(err.error.errorMessage ) // will output 'Some error'
          }).then(function () {
            console.log('- - - -');
            // This will run even though we have a catch before
          });
    }
  }
  constructor( private httpClient: HttpClient ) { }
}



