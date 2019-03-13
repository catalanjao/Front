import { Component } from '@angular/core';
import { NavController, NavParams, Loading } from 'ionic-angular';
import { PagescndllPage } from '../pagescndll/pagescndll';
import { StudensServiceProvider } from '../../providers/studens-service/studens-service';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

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
  students: any;
  constructor(public navCtrl: NavController,
    private events_manager: EventManagerProvider,
     public navParams: NavParams,
     private student_provider:StudensServiceProvider) {

    this.data=this.navParams.data;
    this.user = navParams.get('name');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageHllPage');
    this.loadStudents();
  }
  goScn(){
    this.colorlabel="colordefined";
    //this.navCtrl.push(PagescndllPage);
  }
  deleteCard(student:any){
    console.log(student);
    this.events_manager.setIsLoading(true);
    this.student_provider
    .delStudents(student.id)
    .subscribe(()=>{
      this.events_manager.setIsLoading(false);
      this.loadStudents;
      this.events_manager.setMsgToast('se borro :(');
    }, error => {
      this.events_manager.setIsLoading(false);
      this.events_manager.setMsgToast(error.error.message);
    });
  }
  loadStudents(){
    this.student_provider.
    getStudents()
    .subscribe((response:any)=>{
      this.students = response;
    }, error =>{
      console.log(error);
    });
  }
}
