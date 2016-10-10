For Firebase:
1.  # if you have the wrong cli version only
    npm uninstall -g angular-cli
    
    # reinstall clean version
    npm install -g angular-cli 
    
2.  npm install -g typings 
    npm install -g typescript
    
3.  npm install angularfire2 firebase --save
4. \src\tsconfig.json :
   add "files":["../node_modules/firebase/firebase.d.ts"]
5. \src\typings.d.ts :
  add /// <reference path="../node_modules/firebase/firebase.d.ts" />
6.  update /src/app/app.module.ts:
   1.  import { AngularFireModule } from 'angularfire2';
   2.  export const firebaseConfig = {
         apiKey: "AIzaSyC1xzS0eO37ylU_4Eqhtz5X_LZG0BUsGTg",
         authDomain: "businesscontacts-9c298.firebaseapp.com",
         databaseURL: "https://businesscontacts-9c298.firebaseio.com",
         storageBucket: "businesscontacts-9c298.appspot.com",
         messagingSenderId: "465082239973"
       };
   3.  @NgModule({
         imports: [
           .....,
           AngularFireModule.initializeApp(firebaseConfig)
         ]
7.  /src/app/app.component.ts
   1. import { AngularFire, FirebaseListObservable } from 'angularfire2';
   2. items: FirebaseListObservable<any[]>;
        constructor(af: AngularFire) {
          this.items = af.database.list('items');
        }
8. /src/app/app.component.html 
   <ul *ngFor="let item of items | async">
     <li class="text">
       {{item.name}}
     </li>
   </ul>
  
9. ng serve
10. http://localhost:4200/




# Businesscontacts

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
