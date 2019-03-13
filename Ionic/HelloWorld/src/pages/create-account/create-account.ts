import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.createAccountForm = this.fb.group({
    name:['',Validators.required],
    app: ['',Validators.required],
    apm: [''],
    email: ['',[Validators.required,Validators.email]],
    matricula: ['',Validators.required]
    });
  }
  clickcreate(){
    console.log('Boton Create Presionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

}
