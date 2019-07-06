import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
