import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RevistasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revistas',
  templateUrl: 'revistas.html',
})
export class RevistasPage {

  public referencia = {
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

  public referenciaCompleta = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RevistasPage');
  }

  gerarReferenciaRevistas() : void {
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
      this.referencia.ano + (".")  ;
  }

}
