import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageHllPage } from '../pages/page-hll/page-hll';
import { PagescndllPage } from '../pages/pagescndll/pagescndll';
import { PipesModule } from '../pipes/pipes.module';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudensServiceProvider } from '../providers/studens-service/studens-service';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { LoginProviderMock } from './mock/loginProviderMock';
import { EventManagerProvider } from '../providers/event-manager/event-manager';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageHllPage,
    PagescndllPage,
    CreateAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageHllPage,
    PagescndllPage,
    CreateAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudensServiceProvider,
//    {
     //provide: LoginProvider,
     //useClass: LoginProviderMock
    //}
    LoginProvider,
    EventManagerProvider
  ]
})
export class AppModule {}
