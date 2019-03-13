import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudensServiceProvider } from '../../providers/studens-service/studens-service';
import { Stundent } from '../../app/model/studentes.model';
import { LoginProviderMock } from '../../app/mock/loginProviderMock';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  createAccountForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fb:FormBuilder, 
              private studentprovider:StudensServiceProvider,
              private loading: LoadingController) {
    this.createAccountForm = this.fb.group({
    name:['',Validators.required],
    app: ['',Validators.required],
    apm: [''],
    email: ['',[Validators.required,Validators.email]],
    matricula: ['',Validators.required]
    });
  }
  clickcreate(){
    let pressentLoadign= this.loading.create({
      content:'Espere por favor'
    });
    pressentLoadign.present();
    let accountInfo:Stundent= this.createAccountForm.getRawValue();
    console.log(this.createAccountForm.getRawValue());
    this.studentprovider.createAccountStundent(accountInfo)
    .subscribe( ()=> {
      console.log('data');
    }, error=> {
      pressentLoadign.dismiss();
      console.log('Error');
    },()=>{
      console.log('Success');
      pressentLoadign.dismiss();
    });
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

}
