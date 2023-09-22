import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardListComponent } from '../card-list.component';
import { CardListService } from '../service/card-list.service';
import { SharedAngularMaterialModule } from '../../../../shared/shared-angular-material.module';




@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedAngularMaterialModule, 
    ReactiveFormsModule, 
  ],
  providers: [CardListService],
  exports: [CardListComponent]
})
export class CardListModule { }
