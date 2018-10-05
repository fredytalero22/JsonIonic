import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stops: any;
  
  constructor(public navCtrl: NavController, private userService: UserServiceProvider) {
  }
  
  ionViewDidLoad(){
    this.userService.getStops().subscribe(
      (data) => { // Success
        this.stops = data;
        console.log(data[0]);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
