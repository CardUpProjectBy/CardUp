import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header.component";
import { CommonModule } from "@angular/common";
import { SharedAngularMaterialModule } from "../../../../shared/shared-angular-material.module";


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, 
    SharedAngularMaterialModule, 
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}