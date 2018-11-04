import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public remoteService : RemoteServiceProvider,private http: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  

}
