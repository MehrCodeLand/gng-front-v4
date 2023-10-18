import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataGridComponent } from './components/category/data-grid/data-grid.component';
import {DxButtonModule, DxDataGridModule} from "devextreme-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        DxDataGridModule,
        HttpClientModule,
        DxButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
