import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotAuthorizedComponent
      }
    ])
  ]
})
export class NotAuthorizedModule { }
