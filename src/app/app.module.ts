import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TesesPage } from '../pages/teses/teses';
import { LivrosPage } from '../pages/livros/livros';
import { JornaisPage } from '../pages/jornais/jornais';
import { SitesPage } from '../pages/sites/sites';
import { RevistasPage } from '../pages/revistas/revistas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OrganizacoesPage} from "../pages/organizacoes/organizacoes";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TesesPage,
    LivrosPage,
    SitesPage,
    JornaisPage,
    RevistasPage,
    OrganizacoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TesesPage,
    LivrosPage,
    SitesPage,
    JornaisPage,
    RevistasPage,
    OrganizacoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
