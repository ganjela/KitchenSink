import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() inputData: any;
  @Output() inputDataChange = new EventEmitter<any>();
  ngOnInit(): void {
    this.inputDataChange.emit(this.childUsers);
  }

  childUsers: ChildUser[] = [
    {
      Id: 1,
      Firstname: 'Bandito',
      Lastname: 'Truce',
      DateOfBirth: new Date("2004-03-28"),
      PhoneNumber: '598666666',
      Email: 'btruce@gmail.com'
    },
  ]
}
