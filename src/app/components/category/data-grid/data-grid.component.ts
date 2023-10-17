import { Component } from '@angular/core';
import {ServiceCategoryService} from "../../../services/service-category.service";

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {

  result: any ;


  DataLoader(){

    this.categoryService.GetAllCategory().subscribe(x => {
      console.log(x);
      if(x.hasError == true  ){
        this.result = x.errorMessage ;
      }
      this.result = x.data ;
    })

  }

  constructor(private categoryService  : ServiceCategoryService ) {
    this.DataLoader();
  }
}
