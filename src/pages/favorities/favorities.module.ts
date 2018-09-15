import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritiesPage } from './favorities';

@NgModule({
  declarations: [
    FavoritiesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritiesPage),
  ],
})
export class FavoritiesPageModule {}
