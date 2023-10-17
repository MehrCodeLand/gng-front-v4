import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {




  url = 'https://localhost:7091/api/Category/GetAll';


  GetAllCategory(){
    return this.httpClient.get<any>(this.url);
  }
  constructor( private httpClient: HttpClient ) { }
}
