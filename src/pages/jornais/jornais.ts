import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JornaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornais',
  templateUrl: 'jornais.html',
})
export class JornaisPage {

  public referencia = {    sobrenome: "",    nomeAutor: "",    titulo: "",
    nomeJornal: "",    localPublicacao: "",    pagina: "",    dataPublicacaoJornal: ""
  };

  public referenciaCompleta = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornaisPage');
  }
  gerarReferenciaJornal() : void {
    this.referenciaCompleta =
      this.referencia.sobrenome.toLocaleUpperCase() + (", ") +
      this.referencia.nomeAutor + (". ") +
      this.referencia.titulo + (". ") +
      this.referencia.nomeJornal + (", ") +
      this.referencia.localPublicacao + (", p. ") +
      this.referencia.pagina + (", ") +
      this.referencia.dataPublicacaoJornal + (". ") ;

  }

}
