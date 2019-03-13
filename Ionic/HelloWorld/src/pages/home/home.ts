import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageHllPage } from '../page-hll/page-hll';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: String;
  group: String;
  money: number;
  cursos: String[] = [
    'Ionic',
    'Docker',
    'Java',
    'Angular',
    'Net',
    'Liquibase'];
loginForm: FormGroup;
 
  constructor(public navCtrl: NavController, private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      usr:['',Validators.required],
      pwd:['',Validators.required]
    });
  }
  gopagehll(){ 
    console.log('Primer click');    
    //let data = {user:this.user,group:this.group,courses:this.cursos,date:new Date(),money:this.money};
    //console.log(data);
    //this.navCtrl.push(PageHllPage,data);
  }

}
