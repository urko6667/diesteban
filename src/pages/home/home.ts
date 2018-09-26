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

		this.navCtrl.push(contentPage, { opcion : tema });
}

}
