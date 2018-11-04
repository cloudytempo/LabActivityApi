import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {};

  @ViewChild("firstname") firstname;
  @ViewChild("lastname") lastname;
  @ViewChild("email") email;
  @ViewChild("phone") phone;
  @ViewChild("username") username;
  @ViewChild("password") password;
  @ViewChild("confirmpass") confirmpass;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public alertCtrl: AlertController, public http: Http, public LoadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {

    var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

    let data = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      phone: this.user.phone,
      username: this.user.username,
      password: this.user.password,
      confirmpass: this.user.confirmpass
    };

    console.log(data.password);
    console.log(data.confirmpass);

    let loader = this.LoadingCtrl.create({
      content: 'Processing please wait...',
    });

    if(data.password == data.confirmpass)
    
    {
      console.log("masuk");
    
      this.http.post('http://localhost/db/register.php', JSON.stringify(data), options)
            .map(res => res.json())
            //console.log("masuk");
            .subscribe(data => {
              loader.dismiss()
            });

            let alert = this.alertCtrl.create({
              title: "CONGRATULATION!",
              subTitle: "Sign Up Successfully",
              buttons: ['OK']
            });
      
            alert.present();
            this.navCtrl.push(LoginPage);

    }
    else{
      let alert = this.alertCtrl.create({
        title: "ERROR",
        subTitle: "Mismatch password",
        buttons: ['OK']
      });

      alert.present();
    }
  }
}
