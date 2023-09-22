import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityComponent } from '../activity.component';
import { SharedAngularMaterialModule } from "../../../../shared/shared-angular-material.module"
import { ActivityRoutingModule } from './activity-routing.module';



@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedAngularMaterialModule,
    ActivityRoutingModule
  ],
  exports: []
})
export class ActivityModule { }
