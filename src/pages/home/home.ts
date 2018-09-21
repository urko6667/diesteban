import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { contentPage } from '../content/content';
import { DatosProvider } from "../../Providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public serDatos: DatosProvider,
    public alerta: AlertControler) {

  }
AbrirPagina(tema) {
	switch(this){

		case ("lug"):
			this.navCtrl.push(contentPage, {{lug: nombre}});
			break;
		case ("hot"):
			this.navCtrl.push(contentPage, {{lug: nombre}});
			break;
		case ("cab"):
			this.navCtrl.push(contentPage, {{lug: nombre}});
			break;
		case ("res"):
			this.navCtrl.push(contentPage, {{lug: nombre}});
			break;

	}

}


    this.navCtrl.push(contentPage, );
  }
}
