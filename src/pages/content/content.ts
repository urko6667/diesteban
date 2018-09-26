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
  objeto;
  informacion:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public SerDatos: DataProvider) {
    this.objeto = navParams.get('opcion');

    if(this.objeto == "Lugares") {

      this.informacion = [ 
        {
          nombre: "Bermeo",
          ubicacion: "Bizkaia",
          descripcion: "Fundada en 1236, la villa ostentó el título de 'Cabeza de Vizcaya' desde el año 1476 hasta 1602, siendo la principal población del Señorío de Vizcaya.",
          imagen: "../../assets/imgs/Lugares/bermeo.jpg",
          tema: 1,
        },
        {
          nombre: "Mundaka",
          ubicacion: "Bizkaia",
          descripcion: "Mundaka es una anteiglesia y municipio de España situado en la margen izquierda de la desembocadura de la ría de Mundaca, al norte de la provincia de Vizcaya, en la comunidad autónoma del País Vasco.",
          imagen: "../../assets/imgs/Lugares/mundaka.jpg",
          tema: 1,
        },
        {
          nombre: "Bilbao",
          ubicacion: "Bizkaia",
          descripcion: "Es la capital de facto del País Vasco y su centro está repleto de rascacielos. Es famosa por el Museo Guggenheim Bilbao, diseñado por Frank Gehry, que provocó la revitalización de la ciudad tras su inauguración en 1997.",
          imagen: "../../assets/imgs/Lugares/bilbao.jpg",
          tema: 1,
        },
        {
          nombre: "Bakio",
          ubicacion: "Bizkaia",
          descripcion: "El municipio se llamaba antiguamente Basigo de Bakio, siendo este el nombre de su principal barrio. Está formado por un pequeño valle drenado en su interior por el río Zarraga o Estepona, y el pequeño Ondarra que desemboca en plena playa.",
          imagen: "../../assets/imgs/Lugares/bakio.jpg",
          tema: 1,
        },
        {
          nombre: "Lekeitio",
          ubicacion: "Bizkaia",
          descripcion: "Situada a orillas del golfo de Vizcaya en la cornisa cantábrica, Lequeitio es un destino turístico importante. Un paisaje privilegiado adornado con la isla de San Nicolás y la ría del Lea y con dos amplias playas.",
          imagen: "../../assets/imgs/Lugares/lekeitio.jpg",
          tema: 1,
        },
        {
          nombre: "San Juan de Gaztelugatxe",
          ubicacion: "Bizkaia",
          descripcion: "Gaztelugatxe es un islote de la localidad vizcaína de Bermeo. Está unido al continente por un puente de dos arcos. Sobre la isla hay una ermita dedicada a San Juan que data del siglo X, aunque algunos descubrimientos datan del siglo IX.",
          imagen: "../../assets/imgs/Lugares/gaztelugatxe.jpg",
          tema: 1,
        },
        {
          nombre: "Zelaieta",
          ubicacion: "Bizkaia",
          descripcion: "Pueblo muy bonito",
          imagen: "../../assets/imgs/Lugares/zelaieta.jpg",
          tema: 1,
        }, ];
  
    } 
    else if(this.objeto == "Hospedaje") {

      this.informacion = [ 
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
        }];
   
    } 
    else if (this.objeto == "Gastronomia") {

      this.informacion = [ 
      {
        tema:3,
        nombre:"azurmendi",
        ubicacion:" Bizkaia",
        descripcion:"Un mar de autenticidad donde sentir la tradición y la vanguardia.",
        imagen:"../../assets/imgs/Gastronomia/azurmendi.jpg",
      },
    {
        tema:3,
        nombre:"Ibaiondo",
        ubicacion:"Maruri-Jatabe",
        descripcion:"Gran asador con materias las mejores materias primas de la zona.",
        imagen:"../../assets/imgs/Gastronomia/ibaiondo.jpg",
      },
     {
        tema:3,
        nombre:"Baserri Maitea",
        ubicacion:"Atxondoa",
        descripcion:"Cada detalle está pensado para vosotros.",
        imagen:"../../assets/imgs/Gastronomia/Baserri.jpg",
      },
     {
        tema:3,
        nombre:"Bikandi Etxea",
        ubicacion:"Bilbao, Somera",
        descripcion:"Restaurante con muy buena comida en pleno casco viejo",
        imagen:"../../assets/imgs/Gastronomia/bikando_etxea.jpg",
      },
     {
        tema:3,
        nombre:"Blueizar",
        ubicacion:"Bilbao, Abando",
        descripcion:"Disfruta de la mejor alta comida en bilbao ",
        imagen:"../../assets/imgs/Gastronomia/blueizar.jpg",
      },
     {
        tema:3,
        nombre:"KUMA",
        ubicacion:"Bilbao, Ercilla",
        descripcion:"Descubre otras culturas fusionadas con la cultura Vasca.",
        imagen:"../../assets/imgs/Gastronomia/kuma.jpg",
      }, ];

    } 
    else {

      this.informacion = [ 
        {
          tema:4,
          nombre:"Senderismo",
          ubicacion:"Kortezubi",
          descripcion:"Recorre las rutas mas profundas de los bosques de urdaibai.",
          imagen:"../../assets/imgs/actividades/senderismo.jpg",
        },
        {
          tema:4,
          nombre:"Paseo Hipico",
          ubicacion:"Murueta",
          descripcion:"Pasea en caballo por los montes y pueblos.",
          imagen:"../../assets/imgs/actividades/caballo.jpg",  },
        {
          tema:4,
          nombre:"Piraguismo",
          ubicacion:"Laida",
          descripcion:"Pasea en piragua por la marisma.",
          imagen:"../../assets/imgs/actividades/piragua.jpg",  },
        {
          tema:4,
          nombre:"Surf",
          ubicacion:"Mundaka",
          descripcion:"Surfea en mundaka o laga.",
          imagen:"../../assets/imgs/actividades/surf.jpg",  },
        {
          tema:4,
          nombre:"Paseos maritimos",
          ubicacion:"Bermeo",
          descripcion:"Paseos en barco por la costa.",
          imagen:"../../assets/imgs/actividades/paseobarco.jpg",  },
        {
          tema:4,
          nombre:"Museos",
          ubicacion:"Busturia, Bermeo, Gernika",
          descripcion:"Visita los varios museos de los que dispone urdaibai.",
          imagen:"../../assets/imgs/actividades/museo.jpg",  
        } ]; 
    }

  }
}
