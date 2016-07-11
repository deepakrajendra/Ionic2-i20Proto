import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  public user={
    email:'',
    password:'',
    inum:''
  };
  public users=[];
public validUsers=[];

  constructor(private http: Http) {
    this.users.push(
{
email:'user1@gmail.com',
password:'user1',
inum:'abc123',
userName:'user1'
});

this.users.push(
{
email:'user2@gmail.com',
password:'user2',
inum:'abd234',
userName:'user2'
});

this.users.push({
email:'user3@gmail.com',
password:'user3',
inum:'abc133',
userName:'user3'
});
    
this.users.push({
email:'user4@gmail.com',
password:'user4',
inum:'abc103',
userName:'user4'
});

this.users.push({
email:'user5@gmail.com',
password:'user5',
inum:'abd113',
userName:'user5'
});

this.users.push({
email:'user6@gmail.com',
password:'user6',
inum:'abd124',
userName:'user6'
});


    
    
  }
// end of constructor

getUsers()
{
  return this.users;
  
}

//add user
addUser(emaill,userNamee,inumm,passwordd)
{
  this.users.push({
    
    email:emaill,
    password:passwordd,
    inum:inumm,
        userName:userNamee
    
  });
}

  
  getUsersById(inum)
  {
    
    for(let user of this.users)
    {
      if(user.inum.includes(inum.substring(0,3)))
      {
        
this.validUsers.push(user);
      }
      
    }
    return this.validUsers;
  }
  }


