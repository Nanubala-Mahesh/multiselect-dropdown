import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    AppComponent,
    ZipcodeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    InfiniteScrollModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
