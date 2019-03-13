import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagescndllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagescndll',
  templateUrl: 'pagescndll.html',
})
export class PagescndllPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagescndllPage');
  }

  goback(){
    this.navCtrl.pop();
  }
  goend(){
    this.navCtrl.popToRoot();
  }
}
