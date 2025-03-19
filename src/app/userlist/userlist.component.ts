import { Component } from '@angular/core';
import { Userdata } from '../userdata';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  namesArray: Userdata[] = [{
    username: 'Vinay', age: 22,
    status: false
  },{
    username: 'Harshitha', age: 18,
    status: true
  },{
    username: 'Neha', age: 22,
    status: true
  }];
  
  AddUserToArray(evt: any):void {
    let temp:Userdata = evt;
    this.namesArray.push(temp);
  }

}
