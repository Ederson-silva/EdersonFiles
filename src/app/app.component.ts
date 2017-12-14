import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TesesPage } from '../pages/teses/teses';
import { LivrosPage } from '../pages/livros/livros';
import { SitesPage } from '../pages/sites/sites';
import { JornaisPage } from '../pages/jornais/jornais';
import { RevistasPage } from '../pages/revistas/revistas';
import {OrganizacoesPage} from "../pages/organizacoes/organizacoes";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Teses', component: TesesPage },
      { title: 'Livros', component: LivrosPage },
      { title: 'Sites', component: SitesPage },
      { title: 'Artigo de Jornal', component: JornaisPage },
      { title: 'Revistas', component: RevistasPage },
      { title: 'Organizações', component: OrganizacoesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
