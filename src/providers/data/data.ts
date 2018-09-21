import { Injectable } from '@angular/core';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  Lugares: any = [];
  constructor() {
    console.log('Hello DataProvider Provider');
    
    this.Lugares = [ 
      {
        nombre: "Lugar 1",
        ubicacion: "Lugar 1",
        descripcion: "Lugar 1",
        imagen: "Lugar 1",
      }];
  }
  }



