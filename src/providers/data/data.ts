import { Injectable } from '@angular/core';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  BaseDatos: any = [];
  //CargarItems:[] = [];
  constructor() {
    console.log('Hello DataProvider Provider');
    

    this.BaseDatos = [ 
       {
        nombre: "Hotel Occidental",
        ubicacion: "Bilbao",
        descripcion: "Hospedaje 1",
        imagen: "../../assets/imgs/Hospedaje/hoteloccidentalbilbao.jpg",
      },
      {
        nombre: "Hotel Puerta de Bilbao",
        ubicacion: "Barakaldo",
        descripcion: "Hospedaje 2",
        imagen: "../../assets/imgs/Hospedaje/hotelpuertadebilbao.jpg",
      },
      {
        nombre: "Hospedaje 3",
        ubicacion: "Hospedaje 3",
        descripcion: "Hospedaje 3",
        imagen: "Hospedaje 3",
      },
      {
        nombre: "Hospedaje 4",
        ubicacion: "Hospedaje 4",
        descripcion: "Hospedaje 4",
        imagen: "Hospedaje 4",
      },
      {
        nombre: "Hospedaje 5",
        ubicacion: "Hospedaje 5",
        descripcion: "Hospedaje 5",
        imagen: "Hospedaje 5",
      },
      {
        nombre: "Hospedaje 6",
        ubicacion: "Hospedaje 6",
        descripcion: "Hospedaje 6",
        imagen: "Hospedaje 6",
      },
      {
        nombre: "Hospedaje 7",
        ubicacion: "Hospedaje 7",
        descripcion: "Hospedaje 7",
        imagen: "Hospedaje 7",
      },
      {
        nombre: "Hospedaje 8",
        ubicacion: "Hospedaje 8",
        descripcion: "Hospedaje 8",
        imagen: "Hospedaje 8",
      },
      {
        nombre: "Gastronomia 1",
        ubicacion: "Gastronomia 1",
        descripcion: "Gastronomia 1",
        imagen: "Gastronomia 1",
      },
      {
        nombre: "Gastronomia 2",
        ubicacion: "Gastronomia 2",
        descripcion: "Gastronomia 2",
        imagen: "Gastronomia 2",
      },
      {
        nombre: "Gastronomia 3",
        ubicacion: "Gastronomia 3",
        descripcion: "Gastronomia 3",
        imagen: "Gastronomia 3",
      },
      {
        nombre: "Gastronomia 4",
        ubicacion: "Gastronomia 4",
        descripcion: "Gastronomia 4",
        imagen: "Gastronomia 4",
      },
      {
        nombre: "Gastronomia 5",
        ubicacion: "Gastronomia 5",
        descripcion: "Gastronomia 5",
        imagen: "Gastronomia 5",
      },
      {
        nombre: "Gastronomia 6",
        ubicacion: "Gastronomia 6",
        descripcion: "Gastronomia 6",
        imagen: "Gastronomia 6",
      },
      {
        nombre: "Gastronomia 7",
        ubicacion: "Gastronomia 7",
        descripcion: "Gastronomia 7",
        imagen: "Gastronomia 7",
      },
      {
        nombre: "Gastronomia 8",
        ubicacion: "Gastronomia 8",
        descripcion: "Gastronomia 8",
        imagen: "Gastronomia 8",
      },
      {
        nombre: "Senderismo",
        ubicacion: "Actividad 1",
        descripcion: "Actividad 1",
        imagen: "../../assets/imgs/Actividades/senderismo.jpg",
      },
      {
        nombre: "Piraguismo",
        ubicacion: "Actividad 2",
        descripcion: "Actividad 2",
        imagen: "../../assets/imgs/Actividades/piraguismo.jpg",
      },
      {
        nombre: "Actividad 3",
        ubicacion: "Actividad 3",
        descripcion: "Actividad 3",
        imagen: "Actividad 3",
      },
      {
        nombre: "Actividad 4",
        ubicacion: "Actividad 4",
        descripcion: "Actividad 4",
        imagen: "Actividad 4",
      },
      {
        nombre: "Actividad 5",
        ubicacion: "Actividad 5",
        descripcion: "Actividad 5",
        imagen: "Actividad 5",
      },
      {
        nombre: "Actividad 6",
        ubicacion: "Actividad 6",
        descripcion: "Actividad 6",
        imagen: "Actividad 6",
      },
      {
        nombre: "Actividad 7",
        ubicacion: "Actividad 7",
        descripcion: "Actividad 7",
        imagen: "Actividad 7",
      },
      {
        nombre: "Actividad 8",
        ubicacion: "Actividad 8",
        descripcion: "Actividad 8",
        imagen: "Actividad 8",
      }, ]; 
  }

  }



