import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartCard } from '../home/home';
import { HomePage } from '../home/home';
import { HTTP } from '@ionic-native/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
    let url="http://18.191.8.195:8080/smartcards";
    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    // });

    this.http.get(url, {}, {'Access-Control-Allow-Origin': '*'})
    .then(data => {

      console.log('data');
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log('err');
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
    //let headers = new HttpHeaders({'Content-Type': 'application/json'});
  //  // let headers = new HttpHeaders({
  //     //'Content-Type': 'application/x-www-form-urlencoded',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'http://localhost:8100',
  //     'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
  //     'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization, Origin, Accept'
  //   });
  //   let body={};

  //   this.http.post(url, body, {headers:headers}).subscribe((res:any)=>{
  //     console.log("res:" + JSON.stringify(res));
  //     let response = res;
  //     if(response.result=="success") {
        
  //     } else {
        
  //     }
  //   });
     /*this.smartCards.push(new SmartCard());
    this.smartCards.push(new SmartCard());
    this.smartCards.push(new SmartCard());*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  loadSmartCard() {
    this.navCtrl.setRoot(HomePage);
  }

}
