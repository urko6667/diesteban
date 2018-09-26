webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var contentPage = /** @class */ (function () {
    function contentPage(navCtrl, navParams, SerDatos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SerDatos = SerDatos;
        this.informacion = [];
        this.objeto = navParams.get('opcion');
        if (this.objeto == "Lugares") {
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
                },
            ];
        }
        else if (this.objeto == "Hospedaje") {
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
                }
            ];
        }
        else if (this.objeto == "Gastronomia") {
            this.informacion = [
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
            ];
        }
        else {
            this.informacion = [
                {
                    tema: 4,
                    nombre: "Senderismo",
                    ubicacion: "Kortezubi",
                    descripcion: "Recorre las rutas mas profundas de los bosques de urdaibai.",
                    imagen: "../../assets/imgs/actividades/senderismo.jpg",
                },
                {
                    tema: 4,
                    nombre: "Paseo Hipico",
                    ubicacion: "Murueta",
                    descripcion: "Pasea en caballo por los montes y pueblos.",
                    imagen: "../../assets/imgs/actividades/caballo.jpg",
                },
                {
                    tema: 4,
                    nombre: "Piraguismo",
                    ubicacion: "Laida",
                    descripcion: "Pasea en piragua por la marisma.",
                    imagen: "../../assets/imgs/actividades/piragua.jpg",
                },
                {
                    tema: 4,
                    nombre: "Surf",
                    ubicacion: "Mundaka",
                    descripcion: "Surfea en mundaka o laga.",
                    imagen: "../../assets/imgs/actividades/surf.jpg",
                },
                {
                    tema: 4,
                    nombre: "Paseos maritimos",
                    ubicacion: "Bermeo",
                    descripcion: "Paseos en barco por la costa.",
                    imagen: "../../assets/imgs/actividades/paseobarco.jpg",
                },
                {
                    tema: 4,
                    nombre: "Museos",
                    ubicacion: "Busturia, Bermeo, Gernika",
                    descripcion: "Visita los varios museos de los que dispone urdaibai.",
                    imagen: "../../assets/imgs/actividades/museo.jpg",
                }
            ];
        }
    }
    contentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"E:\ionic\Proyectos\diesteban\src\pages\content\content.html"*/'<!--\n\n  Generated template for the ContentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n   \n\n  <ion-navbar>\n\n    <ion-title>{{objeto}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cards-bg">\n\n \n\n    <ion-card  *ngFor="let elemento of informacion">\n\n    <img src="{{elemento.imagen}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{elemento.nombre}}\n\n      </ion-card-title>\n\n      <p>\n\n       {{elemento.descripcion}}\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'md-map\'></ion-icon>\n\n          Ubicación\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="primary" icon-start>\n\n          <ion-icon name=\'md-images\'></ion-icon>\n\n          Fotos\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\Proyectos\diesteban\src\pages\content\content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], contentPage);
    return contentPage;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/content/content.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    //CargarItems:[] = [];
    function DataProvider() {
        this.BaseDatos = [];
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
            },
        ];
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_content__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.AbrirPagina = function (tema) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__content_content__["a" /* contentPage */], { opcion: tema });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\Proyectos\diesteban\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Urdaibai Link\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card (click)="AbrirPagina(\'Lugares\')">\n\n    <img src="../../assets/imgs/Interes.jpg"/>\n\n    <div class="card-title">Lugares</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="AbrirPagina(\'Hospedaje\')">\n\n    <img src="../../assets/imgs/Hotel.jpg"/>\n\n    <div class="card-title">Hospedaje</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="AbrirPagina(\'Gastronomia\')">\n\n    <img src="../../assets/imgs/Restaurante.jpg" />\n\n    <div class="card-title">Gastronomia</div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="AbrirPagina(\'Actividades\')">\n\n    <img src="../../assets/imgs/Caballo.jpg"/>\n\n    <div class="card-title">Actividades</div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\Proyectos\diesteban\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_content_content__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_content_content__["a" /* contentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'contentPage', segment: 'content', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_content_content__["a" /* contentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\Proyectos\diesteban\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\ionic\Proyectos\diesteban\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map