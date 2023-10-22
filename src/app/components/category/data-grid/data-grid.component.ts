import { Component } from '@angular/core';
import {ServiceCategoryService} from "../../../services/service-category.service";
import {HttpClient, HttpParams , HttpHeaders } from '@angular/common/http'
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  customersData: any;
  shippersData: any;
  requests: string[] = [];
  result: any ;
  tempData: any ;
  url = 'https://localhost:7091/api/Category';
  dataSource: CustomStore ;

  constructor(private categoryService  : ServiceCategoryService , private httpClient : HttpClient ) {

    this.dataSource = new CustomStore({
      load: () => this.sendRequest(`${this.url}/GetAll` ),
      insert: (values) => this.sendRequest(`${this.url}/`, 'POST', {
        values: JSON.stringify(values),
      }),
      update: (key, values) => this.sendRequest(`${this.url}`, 'PUT', {
        key,
        values: JSON.stringify(values),
      }),
      remove: (key) => this.sendRequest(`${this.url}/` , 'DELETE', {
        key,
      }),
    });

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

        let user = JSON.stringify(data.values);
        result = this.httpClient.put(`${this.url}/${data.key.categoryId}`, data.values , {headers})
          .toPromise()
          .then(function(data) {
            throw 'Some error';
          }).catch(function (err) {
            alert(err.error ) // will output 'Some error'
          }).then(function () {
            console.log('- - - -');
          });
        break;

      case 'POST':

        result = this.httpClient.post(`${this.url}` , data.values ,{headers})
          .toPromise()
          .then(function(data) {
            throw 'Some error';
          }).catch(function (err) {
            alert(err.error ) // will output 'Some error'
          }).then(function () {
            console.log('- - - -');
          });
          break;

      case 'DELETE':
        let myId = JSON.stringify(data.key.categoryId);
        this.result =  this.httpClient.delete(`${this.url}/${myId}` , {headers})
          .toPromise()
          .then(function(data) {
            throw 'Some error';
          }).catch(function (err) {
            alert(err.error.errorMessage ) // will output 'Some error'
          }).then(function () {
            console.log('- - - -');
          });
    }
  }
}


export class Category {
  public CategroyId: string = '';
  public CategoryName: string = '';
  public Description: string = '';

  constructor() {
  }
}
