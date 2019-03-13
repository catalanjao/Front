import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Desarrollador } from "../model/desarrollador-model";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({providedIn :'root',})
export class DesarrolladoresService{
    constructor(private dataService: DataService, private _http: HttpClient){}

    save(desarollador: Desarrollador){
        return this._http
        .post(`${this.dataService.urlApi}desarrolladores`, desarollador, {responseType: 'json'})
        .pipe(catchError(this.dataService.handleError));
    }
}