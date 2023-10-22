import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataGridComponent } from './components/category/data-grid/data-grid.component';
import {DxButtonModule, DxDataGridModule, DxFormModule} from "devextreme-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    DxDataGridModule,
    HttpClientModule,
    DxButtonModule,
    DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
