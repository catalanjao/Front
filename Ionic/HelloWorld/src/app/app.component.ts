import { Component } from '@angular/core';
import { Platform, LoadingController, Loading, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { EventManagerProvider } from '../providers/event-manager/event-manager';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loading:Loading;

  constructor(platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private loadinCtrl:LoadingController,
    private event_provider: EventManagerProvider,
    private toastCtrl:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
//    this.loading = this.loadinCtrl.create({
      //content:'Espera por favor...'
    //});
    this.event_provider
    .getIsLoading()
    .subscribe(  isLoading => {
      if(isLoading){
        this.loading = this.loadinCtrl.create({
          content:'Espera por favor...'
        });
        this.loading.present();
      }else{
        this.loading.dismiss();
      }
      });

      this.event_provider
      .getMsgToast()
      .subscribe((msg)=>{
        this.toastCtrl.create({
          message:msg,
          duration:3000
        }).present();
      });
      
    });
  }
}