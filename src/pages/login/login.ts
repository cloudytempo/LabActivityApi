import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {};

  @ViewChild("username") username;
  @ViewChild("password") password;

  data: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public alertCtrl: AlertController, public http: Http, public LoadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    //on success

    if (this.username.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Username field is empty",
        buttons: ['OK']
      });

      alert.present();
    } else

      if (this.password.value == "") {

        let alert = this.alertCtrl.create({

          title: "ATTENTION",
          subTitle: "Password field is empty",
          buttons: ['OK']
        });

        alert.present();

      } else {

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let data = {
          username: this.user.username,
          password: this.user.password
        };

        let loader = this.LoadingCtrl.create({
          content: 'Processing please wait...',
        });

        loader.present().then(() => {

          console.log(data);
          console.log(data.password);
          console.log(JSON.stringify(data));


          this.http.post('http://localhost/db/login.php', JSON.stringify(data), options)
            .map(res => res.json())
            .subscribe(data => {
              loader.dismiss()

              if (data.resp == "Your Login success") {
                console.log("berjaya");

                let alert = this.alertCtrl.create({
                  title: "CONGRATS",
                  subTitle: (data.resp),
                  buttons: ['OK']
                });

                alert.present();
                this.navCtrl.setRoot(HomePage, data);
              } else {
                let alert = this.alertCtrl.create({
                  title: "ERROR",
                  subTitle: "Your Login Username or Password is invalid",
                  buttons: ['OK']
                });

                alert.present();
              }
            });
        });
      }
  }
  navigateRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }
}
