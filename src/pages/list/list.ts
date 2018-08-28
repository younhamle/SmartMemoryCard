import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartCard } from '../home/home';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  smartCards = new Array<SmartCard>();
  //smartCards = new Array<string>();
  response: Observable<any>;
  smartCard:SmartCard;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    let url="http://18.191.8.195:8080/smartcards";
    
    this.response = this.httpClient.get(url);
    this.response
    .subscribe(smartCards => {
      for (let smartCard of smartCards) {
        this.smartCards.push(new SmartCard(smartCard.id, smartCard.title));
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  loadSmartCard(id, title) {
    this.navCtrl.push(HomePage, {'id':id, 'title':title});
  }

}
