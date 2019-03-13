import { Component, OnInit } from '@angular/core';
import { Nivelmodel } from '../model/nivel-model';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { Desarrollador } from '../model/desarrollador-model';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { DesarrolladoresService } from '../services/desarrolladores.service';

@Component({
  selector: 'app-formulariotresonce',
  templateUrl: './formulariotresonce.component.html',
  styleUrls: ['./formulariotresonce.component.css']
})
export class FormulariotresonceComponent implements OnInit {
  niveles: Nivelmodel[];
  //idNivel: number;
  desarrollador: Desarrollador;

  constructor(private formBuilder: FormBuilder, private _data: DataService,
    private desarrolladoresService: DesarrolladoresService) { 
    this.niveles = [
      {id: 1, name: 'Senior'},
      {id: 2, name: 'Middle'},
      {id: 3, name: 'Junior'}
    ];
  }

  registroForm =this.formBuilder.group({
    id: [0],
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    idNivel: [-1, Validators.required]
  });

  ngOnInit() {
  }

  submit(){
    if(this.registroForm.valid && this.registroForm.value.idNivel>=0){
      let desarrollador= new Desarrollador();
      desarrollador.nombre = this.registroForm.value.nombre;
      desarrollador.apellidoPaterno = this.registroForm.value.apellidoMaterno;
      desarrollador.apellidoMaterno = this.registroForm.value.apellidoPaterno;
      desarrollador.nivel= this.registroForm.value.nivel;
      this._data.setIsLoadingEvent(true);
      this.desarrolladoresService.save(desarrollador).subscribe(result=>{
        this._data.setIsLoadingEvent(false);
        if(result){
          this._data.setGeneralNotificationMessage('yastuboprro Si se guardeó');
        }else{
          this._data.setGeneralNotificationMessage('tampocoPRro el servicio no guarda');
        }
        }, error => {
          this._data.setIsLoadingEvent(false);
          console.error(error);
          this._data.setGeneralNotificationMessage('Error al guardar los datos');
        });
    }else{
      this._data.setGeneralNotificationMessage('neLPRRO');
    }
  }

}
