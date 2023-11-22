import { Component } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nika-Ganjelashvili';

  Users = [
    {
      firstname: "Josh",
      lastname: "Dun",
      age: 27
    },
    {
      firstname: "Tyler",
      lastname: "Joseph",
      age: 27
    },
    {
      firstname: "Irakli",
      lastname: "Chabiev",
      age: 25
    },
    {
      firstname: "Luka",
      lastname: "Gobechia",
      age: 100
    },
    {
      firstname: "Morph",
      lastname: "Trench",
      age: 1010101010101010
    },
  ];

  parentUsers: ParentUser[] = [
    { 
      Id: 21,
      Firstname: 'Josh',
      Lastname: 'Dun',
      DateOfBirth: new Date("1988-06-18"),
      PhoneNumber: '21',
      Email: 'jdun@gmail.com'
    },
    { 
      Id: 21,
      Firstname: 'Tyler',
      Lastname: 'Joseph',
      DateOfBirth: new Date("1988-12-01"),
      PhoneNumber: '21',
      Email: 'tjoseph@gmail.com'
    },   
  ];

  childUsers: ChildUser[] = [];
  
  onInputDataChange(value:ChildUser[]){
   this.childUsers = value;
  }
  
}
