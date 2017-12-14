webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the JornaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornaisPage = (function () {
    function JornaisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.referencia = { sobrenome: "", nomeAutor: "", titulo: "",
            nomeJornal: "", localPublicacao: "", pagina: "", dataPublicacaoJornal: ""
        };
        this.referenciaCompleta = "";
    }
    JornaisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornaisPage');
    };
    JornaisPage.prototype.gerarReferenciaJornal = function () {
        this.referenciaCompleta =
            this.referencia.sobrenome.toLocaleUpperCase() + (", ") +
                this.referencia.nomeAutor + (". ") +
                this.referencia.titulo + (". ") +
                this.referencia.nomeJornal + (", ") +
                this.referencia.localPublicacao + (", p. ") +
                this.referencia.pagina + (", ") +
                this.referencia.dataPublicacaoJornal + (". ");
    };
    JornaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornais',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\jornais\jornais.html"*/'<!--\n  Generated template for the JornaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Jornais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <!-- ------------------------- conteudo -->\n\n\n\n    <ion-item>\n      <ion-label floating id="nomeAutor">Nome do Autor</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.nomeAutor" name="nomeAutor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n    <ion-label floating id="sobrenome">Sobrenome Autor</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.sobrenome" name="sobrenome"></ion-input>\n  </ion-item>\n\n    <ion-item>\n      <ion-label floating id="titulo">Título da Obra</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.titulo" name="titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="nomeJornal">Nome do Jornal</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.nomeJornal" name="nomeJornal"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="localPublicacao">Local da Publicação</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.localPublicacao" name="localPublicacao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="pagina">Página</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.pagina" name="pagina"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="dataPublicacaoJornal">Data da Publicação do Jornal</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.dataPublicacaoJornal" name="dataPublicacaoJornal"></ion-input>\n    </ion-item>\n\n    <br />\n\n    <button ion-button full (click)="gerarReferenciaJornal()">Gerar</button><br />\n  </ion-list>\n\n  <ion-label stacked id="referencia" style="font-weight:bold;" >Referência</ion-label>\n\n  <div class="item-text-wrap">{{referenciaCompleta}}</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\jornais\jornais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JornaisPage);
    return JornaisPage;
}());

//# sourceMappingURL=jornais.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LivrosPage = (function () {
    function LivrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.referencia = {
            sobrenome: "",
            nomeAutor: "",
            titulo: "",
            edicao: "",
            localPublicacao: "",
            editora: "",
            dataPublicacaoObra: "",
            pagina: ""
        };
        this.referenciaCompleta = "";
    }
    LivrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivrosPage');
    };
    LivrosPage.prototype.gerarReferenciaLivro = function () {
        this.referenciaCompleta =
            this.referencia.sobrenome + (", ") +
                this.referencia.nomeAutor + (". ") +
                this.referencia.titulo + (", ") +
                this.referencia.edicao + (".ed. ") +
                this.referencia.localPublicacao + (": ") +
                this.referencia.editora + (", ") +
                this.referencia.dataPublicacaoObra + (". ") +
                this.referencia.pagina + ("p. ");
    };
    LivrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livros',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\livros\livros.html"*/'<!--\n  Generated template for the LivrosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Livros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <!-- ------------------------- conteudo -->\n\n    <ion-item>\n      <ion-label floating id="nomeAutor">Nome do Autor</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.nomeAutor" name="nomeAutor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="sobrenome">Sobrenome Autor</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.sobrenome" name="sobrenome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="titulo">Título do Livro</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.titulo" name="titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="edicao">Edição</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.edicao" name="edicao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="localPublicacao">Local da Publicação</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.localPublicacao" name="localPublicacao"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="editora">Editora</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.editora" name="editora"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="dataPublicacaoObra">Data da Publicação do Livro</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.dataPublicacaoObra" name="dataPublicacaoObra"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating id="pagina">Página</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.pagina" name="pagina"></ion-input>\n    </ion-item>\n\n    <br />\n\n    <button ion-button full (click)="gerarReferenciaLivro()">Gerar</button><br />\n  </ion-list>\n\n  <ion-label stacked id="referencia" style="font-weight:bold;" >Referência</ion-label>\n\n  <div class="item-text-wrap">{{referenciaCompleta}}</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\livros\livros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LivrosPage);
    return LivrosPage;
}());

//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the OrganizacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizacoesPage = (function () {
    function OrganizacoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Aqui a gente cria um objetvo referência que vai receber os campos."
        this.referencia = { entidade: "", titulo: "", cidade: "", editora: "", ano: "" };
        this.referenciaCompleta = "";
    }
    OrganizacoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrganizacoesPage');
    };
    //AQUI É A ORDEM DO TEXTO IMPRESSO DA ESQUERDA PARA A DIREITA.
    OrganizacoesPage.prototype.gerarReferencia = function () {
        this.referenciaCompleta =
            this.referencia.entidade.toLocaleUpperCase() + (".") +
                this.referencia.titulo + (".") +
                this.referencia.cidade + (":") +
                this.referencia.editora + (", ") +
                this.referencia.ano + (".");
        // alert(nomes);
    };
    OrganizacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organizacoes',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\organizacoes\organizacoes.html"*/'<!--\n  Generated template for the JornaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Organizações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <!-- ------------------------- conteúdo -->\n\n\n    <ion-item>\n      <ion-label floating>Nome da Entidade</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.entidade" name="entidade"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating id="titulo">Título em Destaque</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.titulo" name="titulo"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating id="cidade">Cidade</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.cidade" name="cidade"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating id="editora">Editora</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.editora" name="editora"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating id="ano">Ano</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.ano" name="ano"></ion-input>\n    </ion-item>\n\n    <br />\n    <button ion-button full (click)="gerarReferencia()">Gerar</button><br />\n\n  </ion-list>\n  <ion-label stacked id="referencia" >Referência</ion-label>\n  <span>{{referenciaCompleta}}</span>\n\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\organizacoes\organizacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrganizacoesPage);
    return OrganizacoesPage;
}());

//# sourceMappingURL=organizacoes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevistasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the RevistasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RevistasPage = (function () {
    function RevistasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.referencia = {
            sobrenome: "",
            nomeAutor: "",
            tituloArtigo: "",
            tituloRevista: "",
            cidade: "",
            editora: "",
            volume: "",
            numero: "",
            mes: "",
            ano: ""
        };
        this.referenciaCompleta = "";
    }
    RevistasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RevistasPage');
    };
    RevistasPage.prototype.gerarReferenciaRevistas = function () {
        this.referenciaCompleta =
            this.referencia.sobrenome.toLocaleUpperCase() + (", ") +
                this.referencia.nomeAutor + (". ") +
                this.referencia.tituloArtigo + (". ") +
                this.referencia.tituloRevista + (", ") +
                this.referencia.cidade + (", ") +
                this.referencia.editora + (", ") +
                this.referencia.volume + (", ") +
                this.referencia.numero + (", ") +
                this.referencia.mes + (", ") +
                this.referencia.ano + (".");
    };
    RevistasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-revistas',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\revistas\revistas.html"*/'<!--\n  Generated template for the TesesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Revistas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- Conteúdo ----------------------- -->\n  <!-- Aqui usamos o HTML da documentação do Ionic -->\n\n  <ion-item>\n    <ion-label floating>Nome do Autor</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.nomeAutor" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Sobrenome do Autor</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.sobrenome" ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Título do Artigo</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.tituloArtigo" ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Titulo da Revista</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.tituloRevista" ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Cidade</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.cidade" ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Editora</ion-label>\n    <ion-input type="text" [(ngModel)]="referencia.editora" ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Volume</ion-label>\n    <ion-input type="number" [(ngModel)]="referencia.volume" ></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Numero</ion-label>\n    <ion-input type="number" [(ngModel)]="referencia.numero" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Mês</ion-label>\n    <ion-input type="number" [(ngModel)]="referencia.mes" ></ion-input>\n  </ion-item>\n\n    <ion-item>\n      <ion-label floating>Ano</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.ano" ></ion-input>\n    </ion-item>\n  <br />\n\n\n  <br />\n\n    <button ion-button full (click)="gerarReferenciaRevistas()">Gerar</button><br />\n  </ion-list>\n\n  <ion-label stacked id="referencia" style="font-weight:bold;" >Referência</ion-label>\n\n  <div class="item-text-wrap">{{referenciaCompleta}}</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\revistas\revistas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RevistasPage);
    return RevistasPage;
}());

//# sourceMappingURL=revistas.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the SitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitesPage = (function () {
    function SitesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.referencia = { titulo: "", url: "", autor: "", autorNome: "", autorSobre: "", autor2Nome: "", autor2Sobre: "", data: "" };
        this.referenciaCompleta = "";
    }
    SitesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SitesPage');
    };
    SitesPage.prototype.gerarReferencia = function () {
        this.referenciaCompleta = this.referencia.autorSobre.toUpperCase() + (", ") + this.referencia.autorNome + ("; ") + this.referencia.autor2Sobre.toUpperCase() + (", ") + this.referencia.autor2Nome
            + ("; ") + this.referencia.titulo.bold() + (". Disponível em:<") + this.referencia.url + (">. Acessado em: ") + this.referencia.data;
    };
    SitesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sites',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\sites\sites.html"*/'<!--\n  Generated template for the SitesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sites</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Título </ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.titulo" name="titulo"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating id="titulo">Endereço URL </ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.url" name="url"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating id="autor">Autor nome </ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.autorNome" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating id="sobrenome">Sobrenome </ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.autorSobre" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating id="autor2">Autor 2 Nome </ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.autor2Nome" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating id="autor2sobre">Autor 2 Sobrenome </ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.autor2Sobre"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating id="data">Data de acesso(11 dez. 2017)</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.data"></ion-input>\n    </ion-item>\n\n\n    <br />\n\n\n\n    <button ion-button full (click)="gerarReferencia()">Gerar</button><br />\n\n\n  </ion-list>\n\n  <ion-label stacked id="referencia" >Referência</ion-label>\n  <span>{{referenciaCompleta}}</span>\n\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\sites\sites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SitesPage);
    return SitesPage;
}());

//# sourceMappingURL=sites.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the TesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TesesPage = (function () {
    function TesesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.referencia = {
            sobrenome: "",
            nomeAutor: "",
            titulo: "",
            anoApresentacao: "",
            numeroFolha: "",
            categoria: "",
            local: "",
            ano: ""
        };
        this.referenciaCompleta = "";
    }
    TesesPage.prototype.gerarReferenciaTeses = function () {
        this.referenciaCompleta =
            this.referencia.sobrenome.toLocaleUpperCase() + (", ") +
                this.referencia.nomeAutor + (". ") +
                this.referencia.titulo + (". ") +
                this.referencia.anoApresentacao + (". ") +
                this.referencia.numeroFolha + (". ") +
                this.referencia.categoria + (", ") +
                this.referencia.local + (", ") +
                this.referencia.ano + (". ");
    };
    TesesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TesesPage');
    };
    TesesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teses',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\teses\teses.html"*/'<!--\n  Generated template for the TesesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Teses</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- Conteúdo ----------------------- -->\n  <!-- Aqui usamos o HTML da documentação do Ionic -->\n\n    <ion-item>\n      <ion-label floating>Nome do Autor</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.nomeAutor" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Sobrenome do Autor</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.sobrenome" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.titulo" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Ano de Apresentação</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.anoApresentacao" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Numero de Folhas</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.numeroFolha" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Categoria</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.categoria" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Local</ion-label>\n      <ion-input type="text" [(ngModel)]="referencia.local" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Ano</ion-label>\n      <ion-input type="number" [(ngModel)]="referencia.ano" ></ion-input>\n    </ion-item>\n  <br />\n    <button ion-button full (click)="gerarReferenciaTeses()">Gerar</button><br />\n  </ion-list>\n\n  <ion-label stacked id="referencia" style="font-weight:bold;" >Referência</ion-label>\n\n  <div class="item-text-wrap">{{referenciaCompleta}}</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\teses\teses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TesesPage);
    return TesesPage;
}());

//# sourceMappingURL=teses.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		277,
		6
	],
	"../pages/jornais/jornais.module": [
		278,
		5
	],
	"../pages/livros/livros.module": [
		279,
		4
	],
	"../pages/organizacoes/organizacoes.module": [
		280,
		3
	],
	"../pages/revistas/revistas.module": [
		281,
		2
	],
	"../pages/sites/sites.module": [
		282,
		1
	],
	"../pages/teses/teses.module": [
		283,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_teses_teses__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_jornais_jornais__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sites_sites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_revistas_revistas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_organizacoes_organizacoes__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_teses_teses__["a" /* TesesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__["a" /* LivrosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sites_sites__["a" /* SitesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_jornais_jornais__["a" /* JornaisPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_revistas_revistas__["a" /* RevistasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_organizacoes_organizacoes__["a" /* OrganizacoesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornais/jornais.module#JornaisPageModule', name: 'JornaisPage', segment: 'jornais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/livros/livros.module#LivrosPageModule', name: 'LivrosPage', segment: 'livros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organizacoes/organizacoes.module#OrganizacoesPageModule', name: 'OrganizacoesPage', segment: 'organizacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revistas/revistas.module#RevistasPageModule', name: 'RevistasPage', segment: 'revistas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sites/sites.module#SitesPageModule', name: 'SitesPage', segment: 'sites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teses/teses.module#TesesPageModule', name: 'TesesPage', segment: 'teses', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_teses_teses__["a" /* TesesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__["a" /* LivrosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sites_sites__["a" /* SitesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_jornais_jornais__["a" /* JornaisPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_revistas_revistas__["a" /* RevistasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_organizacoes_organizacoes__["a" /* OrganizacoesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_teses_teses__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sites_sites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_jornais_jornais__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_revistas_revistas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_organizacoes_organizacoes__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Teses', component: __WEBPACK_IMPORTED_MODULE_5__pages_teses_teses__["a" /* TesesPage */] },
            { title: 'Livros', component: __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__["a" /* LivrosPage */] },
            { title: 'Sites', component: __WEBPACK_IMPORTED_MODULE_7__pages_sites_sites__["a" /* SitesPage */] },
            { title: 'Artigo de Jornal', component: __WEBPACK_IMPORTED_MODULE_8__pages_jornais_jornais__["a" /* JornaisPage */] },
            { title: 'Revistas', component: __WEBPACK_IMPORTED_MODULE_9__pages_revistas_revistas__["a" /* RevistasPage */] },
            { title: 'Organizações', component: __WEBPACK_IMPORTED_MODULE_10__pages_organizacoes_organizacoes__["a" /* OrganizacoesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Marcos\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcos\myApp\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n   \n    <ion-title>Bem vindo ao AppReferences</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div text-center>\n  <p>Suas referências de forma simples e rápida!</p>\n  </div>\n  <br />\n  <br />\n  \n<ion-content>\n  <div text-center>\n  <button ion-button color="secondary" menuToggle>Menu</button>\n  </div>\n\n\n <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n    \n\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos\myApp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map