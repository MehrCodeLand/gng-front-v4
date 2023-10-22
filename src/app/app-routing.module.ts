import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {DataGridComponent} from "./components/category/data-grid/data-grid.component";

const routes: Routes = [
  { path: 'categories' , component: DataGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
