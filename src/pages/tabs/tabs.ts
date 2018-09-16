import {Component} from "@angular/core";
import {FavoritiesPage} from "../favorities/favorities";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favouritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {

  favouritesPage = FavoritiesPage;
  libraryPage = LibraryPage;

}
