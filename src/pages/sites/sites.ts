import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sites',
  templateUrl: 'sites.html',
})
export class SitesPage {

    public referencia = {titulo: "", url: "", autor: "", autorNome: "", autorSobre: "", autor2Nome: "", autor2Sobre: "", data: ""};

    public referenciaCompleta = "";



    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitesPage');
  }

    gerarReferencia() : void {
        this.referenciaCompleta = this.referencia.autorSobre.toUpperCase() + (", ") + this.referencia.autorNome + ("; ") + this.referencia.autor2Sobre.toUpperCase() + (", ") + this.referencia.autor2Nome
            + ("; ") +this.referencia.titulo.bold() + (". Disponível em:<") +this.referencia.url + (">. Acessado em: ") + this.referencia.data;
    }




}
