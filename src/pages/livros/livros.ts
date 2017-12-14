import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  public referencia = {
    sobrenome: "",
    nomeAutor: "",
    titulo: "",
    edicao: "",
    localPublicacao: "",
    editora: "",
    dataPublicacaoObra: "",
    pagina: ""
  };

  public referenciaCompleta = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }
  gerarReferenciaLivro() : void {
    this.referenciaCompleta =
      this.referencia.sobrenome + (", ") +
      this.referencia.nomeAutor + (". ") +
      this.referencia.titulo + (", ") +
      this.referencia.edicao + (".ed. ") +
      this.referencia.localPublicacao + (": ") +
      this.referencia.editora + (", ") +
      this.referencia.dataPublicacaoObra + (". ") +
      this.referencia.pagina + ("p. ") ;
  }

}
