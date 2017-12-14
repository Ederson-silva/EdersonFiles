import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrganizacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
    selector: 'page-organizacoes',
    templateUrl: 'organizacoes.html',
})
export class OrganizacoesPage {

   //Aqui a gente cria um objetvo referência que vai receber os campos."

public referencia = {entidade: "", titulo: "", cidade: "", editora: "", ano: "" };
public referenciaCompleta = "";

constructor(public navCtrl: NavController, public navParams: NavParams) {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad OrganizacoesPage');
}

//AQUI É A ORDEM DO TEXTO IMPRESSO DA ESQUERDA PARA A DIREITA.
gerarReferencia() : void {
  this.referenciaCompleta =
  this.referencia.entidade.toLocaleUpperCase(  ) +(".")+
    this.referencia.titulo +(".")+
    this.referencia.cidade + (":")+
  this.referencia.editora + (", ") +
    this.referencia.ano + (".");
// alert(nomes);
}
}
