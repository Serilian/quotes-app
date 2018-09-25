import { Component } from '@angular/core';
import {Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings.service";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private sservice: SettingsService){}

  onToggle(toggle: Toggle) {
    this.sservice.setBackground(toggle.checked);
    console.log(toggle);
  }
  checkAltBackground() {
    return this.sservice.isAltBackground();
  }
}
