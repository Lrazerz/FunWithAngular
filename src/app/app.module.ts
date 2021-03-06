import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsService } from './products.service'
//Petro Kryvorotko
@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  providers: [ ProductsService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
