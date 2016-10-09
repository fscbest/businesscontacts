import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  //apiKey: 'AIzaSyC8RfegmKhq4lxTIP4wg0bTypAQeQ308Mo',
  //authDomain: 'businesscontacts-2ef1b.firebaseapp.com',
  //databaseURL: 'https://businesscontacts-2ef1b.firebaseio.com',
  //storageBucket: 'businesscontacts-2ef1b.appspot.com'

  apiKey: "AIzaSyC1xzS0eO37ylU_4Eqhtz5X_LZG0BUsGTg",
  authDomain: "businesscontacts-9c298.firebaseapp.com",
  databaseURL: "https://businesscontacts-9c298.firebaseio.com",
  storageBucket: "businesscontacts-9c298.appspot.com",
  messagingSenderId: "465082239973"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
