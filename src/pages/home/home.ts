import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { contentPage } from '../content/content';
import { DataProvider } from "../../providers/data/data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, 
		public alertCtrl: AlertController,
    public serDatos: DataProvider) {

  }
AbrirPagina(tema) {
	switch(tema){
/*
		case ("lug"):
			this.navCtrl.push(contentPage, {{ lug: nombre}});
			break;
		case ("hot"):
			this.navCtrl.push(contentPage, {{ lug: nombre}});
			break;
		case ("cab"):
			this.navCtrl.push(contentPage, {{ lug: nombre}});
			break;
		case ("res"):
			this.navCtrl.push(contentPage, {{lug: nombre}});
			break;
*/
	}

}

/*
    this.navCtrl.push(contentPage, );
	}
	*/
}
