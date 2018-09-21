import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { contentPage } from '../content/content';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

  }
AbrirPagina(tema) {
	switch(tema){

		case ("Lugares"):
			this.navCtrl.push(contentPage, { opcion : tema });
			break;
		case ("Hospedaje"):
			this.navCtrl.push(contentPage, { opcion: tema });
			break;
		case ("Gastronomia"):
			this.navCtrl.push(contentPage, { opcion: tema });
			break;
		case ("Actividades"):
			this.navCtrl.push(contentPage, { opcion: tema });
			break;

	}
}

}
