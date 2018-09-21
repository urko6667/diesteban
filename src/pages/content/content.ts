import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class contentPage {

  objeto = "SerDatos.";
  lugares22:any = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public SerDatos: DataProvider) {
    this.objeto = this.objeto+navParams.get('opcion');
    this.lugares22 = [ 
      {
        nombre: "Lugar 1",
        ubicacion: "Lugar 1",
        descripcion: "Lugar 1",
        imagen: "Lugar 1",
      },
      {
        nombre: "Lugar 2",
        ubicacion: "Lugar 2",
        descripcion: "Lugar 2",
        imagen: "Lugar 2",
      },
      {
        nombre: "Lugar 3",
        ubicacion: "Lugar 3",
        descripcion: "Lugar 3",
        imagen: "Lugar 3",
      },
      {
        nombre: "Lugar 4",
        ubicacion: "Lugar 4",
        descripcion: "Lugar 4",
        imagen: "Lugar 4",
      },
      {
        nombre: "Lugar 5",
        ubicacion: "Lugar 5",
        descripcion: "Lugar 5",
        imagen: "Lugar 5",
      },
      {
        nombre: "Lugar 6",
        ubicacion: "Lugar 6",
        descripcion: "Lugar 6",
        imagen: "Lugar 6",
      },
      {
        nombre: "Lugar 7",
        ubicacion: "Lugar 7",
        descripcion: "Lugar 7",
        imagen: "Lugar 7",
      },
      {
        nombre: "Lugar 8",
        ubicacion: "Lugar 8",
        descripcion: "Lugar 8",
        imagen: "Lugar 8",
      },

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
