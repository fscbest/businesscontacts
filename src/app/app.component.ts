import { Component, OnInit } from '@angular/core';
import  { FirebaseService } from './services/firebase.service';

import { Business } from './Business';
import { Category } from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit{
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  activCompany:string;
  activCategory:string;
  activYearsInBusiness:string;
  activDescription:string;
  activPhone:string;
  activEmail:string;
  activStreet_address:string;
  activCity:string;
  activState:string;
  activZipcode:string;

  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit(){
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key){
    console.log("Changing state to: " + state);
    if(key){
      console.log("Changing key to " + key);
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category){
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    });
  }

  addBusiness(
    company:string,
    category:string,
    years_in_business:number,
    description:string,
    phone:string,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:string){

    var created_at = new Date().toString();

    var newBusiness = {
      company:company,
      category:category,
      years_in_business:years_in_business,
      description:description,
      phone:phone,
      email:email,
      street_address:street_address,
      city:city,
      state:state,
      zipcode:zipcode,
      created_at:created_at
    }

    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default');
    //console.log(newBusiness);
  }

  showEdit(business){
    this.changeState('edit', business.$key);
    this.activCompany = business.company;
    this.activCategory = business.category;
    this.activYearsInBusiness = business.years_in_business;
    this.activDescription = business.description;
    this.activPhone = business.phone;
    this.activEmail = business.email;
    this.activStreet_address = business.street_address;
    this.activCity = business.city;
    this.activState = business.state;
    this.activZipcode = business.zipcode;
  }

  updateBusiness(){
    var updBusiness = {
      company: this.activCompany,
      category: this.activCategory,
      years_in_business: this.activYearsInBusiness,
      description: this.activDescription,
      phone: this.activPhone,
      email: this.activEmail,
      street_address: this.activStreet_address,
      city: this.activCity,
      state: this.activState,
      zipcode: this.activZipcode
    }

    this._firebaseService.updateBusiness(this.activeKey, updBusiness);
    this.changeState('default');
  }

  deleteBusiness(key){
    this._firebaseService.deleteBusiness(key);
    this.changeState('default');
  }
}
