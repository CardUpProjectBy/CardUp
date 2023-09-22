import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailRoutingModule } from './card-detail-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardListService } from '../../card-list/service/card-list.service';
import { CardDetailComponent } from '../card-detail.component';
import { SharedAngularMaterialModule } from '../../../../shared/shared-angular-material.module';



@NgModule({
  declarations: [CardDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedAngularMaterialModule,
    CardDetailRoutingModule
  ],
  providers: [CardListService]
})
export class CardDetailModule { }
