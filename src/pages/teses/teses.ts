import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teses',
  templateUrl: 'teses.html',
})
export class TesesPage {

  public referencia = {
    sobrenome: "",
    nomeAutor: "",
    titulo: "",
    anoApresentacao: "",
    numeroFolha: "",
    categoria: "",
    local: "",
    ano: ""
  };

  public referenciaCompleta = "";

  gerarReferenciaTeses() : void {
    this.referenciaCompleta =
      this.referencia.sobrenome.toLocaleUpperCase() + (", ") +
      this.referencia.nomeAutor + (". ") +
      this.referencia.titulo + (". ") +
      this.referencia.anoApresentacao + (". ") +
      this.referencia.numeroFolha + (". ") +
      this.referencia.categoria + (", ") +
      this.referencia.local + (", ") +
      this.referencia.ano + (". ");
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesesPage');
  }



}
