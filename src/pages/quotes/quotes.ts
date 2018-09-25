import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private qservice: QuotesService, public navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }


  onAddToFavourite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add quote?',
      buttons: [
        {text:'Yes, go ahead',
        handler: ()=> {
          this.qservice.addQuoteToFavorites(selectedQuote);
          console.log('Added to service');
        }},
        {text:'Nope, changed my mind',
          handler: ()=> {
            console.log('Not happening');
          }}
        ]
    });
    alert.present();
  }

  onRemoveFromFavourites(quote: Quote) {
    this.qservice.removeQuoteFromFavorites(quote);
  }

  isFavourite(quote: Quote) {
    return this.qservice.isQuoteFavorite(quote);
  }
}
