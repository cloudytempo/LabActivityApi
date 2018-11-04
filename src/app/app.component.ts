import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { MyAccountPage } from '../pages/my-account/my-account';
import { RegisterPage } from '../pages/register/register';
import { LogoutPage} from '../pages/logout/logout';

import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;
  
  

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen, events:Events) {
    
    this.initializeApp();

    this.pages = [
      {title:'Login', component: LoginPage},
      {title:'Register', component: RegisterPage}
      ];
    
      events.subscribe('user:loggedin',()=>{
        this.pages = [
                      {title:'My Account', component: MyAccountPage},
                      {title:'Home', component: HomePage},
                      {title:'Logout', component: LogoutPage}
                      ];
      });
  
      events.subscribe('user:loggedout',()=>{
        this.pages = [
                      {title:'Login', component: LoginPage},
                      {title:'Register', component: RegisterPage}
                      
                      ];
      });
      
  }
  
initializeApp()
  {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide()
  });
}
openPage(pages) {
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  this.nav.setRoot(pages.component);
}

}

