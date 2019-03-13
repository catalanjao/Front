import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PageHllPage } from '../page-hll/page-hll';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginProvider } from '../../providers/login/login';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

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
 
  constructor(public navCtrl: NavController, private fb:FormBuilder,private loading: EventManagerProvider,
    private login_provider: LoginProvider) {
    this.loginForm = this.fb.group({
      usr:['',Validators.required],
      pwd:['',Validators.required]
    });
  }
  gopagehll(){ 
    console.log('Primer click');    
    this.navCtrl.push(CreateAccountPage);
    //let data = {user:this.user,group:this.group,courses:this.cursos,date:new Date(),money:this.money};
    //console.log(data);
    //this.navCtrl.push(PageHllPage,data);
  }
  gocreate(){
    this.navCtrl.push(CreateAccountPage);
  }
  clickcreatemock(){
    console.log(this.loginForm.getRawValue());
    this.loading.setIsLoading(true);
    this.login_provider.loginservice(
      this.loginForm.get('usr').value,
      this.loginForm.get('pwd').value)
    .subscribe( (response)=> {
      console.log(response);
      this.loading.setIsLoading(false);
      this.navCtrl.push(PageHllPage,response);
    }, error=> {
      console.log(error);
      this.loading.setIsLoading(false);
      this.loading.setMsgToast(error.error.message);
    },()=>{
      console.log();
    });
  }


}
