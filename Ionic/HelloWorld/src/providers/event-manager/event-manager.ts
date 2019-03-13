import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Loading } from 'ionic-angular';

/*
  Generated class for the EventManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventManagerProvider {
  isloading = new Subject<boolean>();
  constructor(public http: HttpClient) {
    console.log('Hello EventManagerProvider Provider');
  }

  setIsLoading(loading:boolean){
    this.isloading.next(loading);
  }
  getIsLoading(){
    return this.isloading.asObservable();
  }

}
