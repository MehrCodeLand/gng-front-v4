import { Component } from '@angular/core';
import {ServiceCategoryService} from "../../../services/service-category.service";
import {HttpClient, HttpParams} from '@angular/common/http'
import CustomStore from "devextreme/data/custom_store";

import DataSource from "devextreme";
import {lastValueFrom} from "rxjs";
import DevExpress from "devextreme";
import data = DevExpress.data;

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {

  result: any ;

  tempData: any ;
  customersData: any;
  shippersData: any;


  url = 'https://localhost:7091/api/Category';
  dataSource: CustomStore ;

  constructor(private categoryService  : ServiceCategoryService , private httpClient : HttpClient ) {

    this.dataSource = new CustomStore({
      key: 'OrderID',
      load: () => this.sendRequest(`${this.url}/GetAll` ),
      insert: (values) => this.sendRequest(`${this.url}/InsertOrder`, 'POST', {
        values: JSON.stringify(values),
      }),
      update: (key, values) => this.sendRequest(`${this.url}/UpdateOrder`, 'PUT', {
        key,
        values: JSON.stringify(values),
      }),
      remove: (key) => this.sendRequest(`${this.url}/DeleteOrder`, 'DELETE', {
        key,
      }),
    });

    this.customersData = {
      paginate: true,
      store: new CustomStore({
        key: 'Value',
        loadMode: 'raw',
        load: () => this.sendRequest(`${this.url}/GetAll`),
      }),
    };

    this.shippersData = new CustomStore({
      key: 'Value',
      loadMode: 'raw',
      load: () => this.sendRequest(`${this.url}/GetAll`),
    });
  }

  sendRequest(url: string, method = 'GET', data: any = {}): any {

    const httpParams = new HttpParams({ fromObject: data });
    const httpOptions = { withCredentials: true, body: httpParams };
    let result;

    switch (method) {
      case 'GET':
        result = this.httpClient.get(`${this.url}/GetAll` , httpOptions);
        break;
      case 'PUT':
        result = this.httpClient.put(url, httpParams, httpOptions);
        break;
      case 'POST':
        result = this.httpClient.post(url, httpParams, httpOptions);
        break;
      case 'DELETE':
        result = this.httpClient.delete(url, httpOptions);
        break;
    }

    console.log(this.result)
    return lastValueFrom(this.result)
      .then((data: any ) =>  {
        (method == 'GET' ? data.data : data );
        console.log('- - - - - - -- - ');
      } )
      .catch((e) => {
        throw e && e.error();
      })
}}

