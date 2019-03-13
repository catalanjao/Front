import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PagescndllPage } from '../pagescndll/pagescndll';

/**
 * Generated class for the PageHllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-hll',
  templateUrl: 'page-hll.html',
})
export class PageHllPage {
  colorlabel: String = "Dark";
  user:String;
  group:String;
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.data;
    this.user = this.navParams.get('user');
    this.group = this.navParams.get('group');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageHllPage');
  }
  goScn(){
    this.colorlabel="colordefined";
    //this.navCtrl.push(PagescndllPage);
  }

}
