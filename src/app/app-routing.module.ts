import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {DataGridComponent} from "./components/category/data-grid/data-grid.component";

const routes: Routes = [
  { path: 'dataGrid' , component: DataGridComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})


export class AppRoutingModule { }
