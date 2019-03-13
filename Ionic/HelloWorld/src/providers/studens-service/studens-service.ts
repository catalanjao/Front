import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stundent } from '../../app/model/studentes.model';
import { CREATE_USER } from '../../app/endpoints/endpints';

/*
  Generated class for the StudensServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudensServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudensServiceProvider Provider');
  }

  createAccountStundent(account:Stundent){
    return this.http.post(CREATE_USER,account);
  }
}
