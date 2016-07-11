import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserData} from '../../providers/user-data/user-data';
import {UsersListPage} from '../../pages/users-list/users-list';
import {RegisterPage} from '../../pages/register/register';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[UserData]
})
export class HomePage {
  public users=[];
  public email;
  public password;
   
  constructor(private nav: NavController,public userData:UserData) {

  }
  
  login()
  {
    //this.userData.getUsers().map(data=>data.json()).subscribe(
    //  data=>
    //  {
//this.users=data;
        
//}
    //  );
    
    this.users=this.userData.getUsers();
      
      for(let person of this.users)
      {
        if(person.email==this.email && person.password==this.password)
        {
          this.nav.push(UsersListPage ,{person:person});
        }
      }
    
  }
  
  register()
  {
    this.nav.push(RegisterPage);
    
  }
}
