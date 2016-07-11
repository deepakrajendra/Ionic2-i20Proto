import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import {UserData} from '../../providers/user-data/user-data';

/*
  Generated class for the UsersListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users-list/users-list.html',
  providers:[UserData]
})

export class UsersListPage {
  public users=[];
  public id;
  constructor(private nav: NavController,private navParams:NavParams,public userData:UserData) {

this.id=this.navParams.get('person').inum;
this.getUsers(this.id);

  }
  
getUsers(id)
 {
//this.userData.getUsersById(id).then(
 // data=>{
 //   this.users=data;
 // },
  //err=> console.log(err)
 // );
 this.users=this.userData.getUsersById(id);

}
}

