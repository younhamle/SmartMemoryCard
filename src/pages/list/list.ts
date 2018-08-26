import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SmartCard } from '../home/home';

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
  //smartCards = new Array<SmartCard>();
  smartCards:string[] = ['일빵빵 영어회화1', '한자암기박사', '중국어회화'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    let url="http://18.191.8.195:8080/smartcards";
    //let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let headers = new HttpHeaders({
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8100',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization, Origin, Accept'
    });
    let body={};

    this.http.post(url, body, {headers:headers}).subscribe((res:any)=>{
      console.log("res:" + JSON.stringify(res));
      let response = res;
      if(response.result=="success") {
        
      } else {
        
      }
    });
    /*this.smartCards.push(new SmartCard());
    this.smartCards.push(new SmartCard());
    this.smartCards.push(new SmartCard());*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
