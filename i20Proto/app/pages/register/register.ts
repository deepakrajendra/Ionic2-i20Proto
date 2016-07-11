import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserData} from '../../providers/user-data/user-data';

@Component({
  templateUrl: 'build/pages/register/register.html',
  providers:[UserData]
})
export class RegisterPage {

public email;
public password;
public userName;
public inum;

  constructor(private nav: NavController,private userData:UserData) {

  }

register()
{
  this.userData.addUser(this.email,this.userName,this.inum,this.password);
  this.nav.pop();
  
}
}
