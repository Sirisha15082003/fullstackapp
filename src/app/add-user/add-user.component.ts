import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  uname:string='';
  uage:number=0;
  charsRemaing:number=0;
  @Output() AddUserEvent:EventEmitter<Userdata>=new EventEmitter<Userdata>();
  
  AddNewUser(){
    let newUser:Userdata={
      username: this.uname,
      age: this.uage,
      status: true
    };
    this.AddUserEvent.emit(newUser);
    console.log(this.uname);
    console.log(this.uage);

    console.log('User Added');
    
  }

  OnTextChange(){
    this.charsRemaing=20-this.uname.length;
    if(this.charsRemaing<0){
      this.charsRemaing=0;
      this.uname=this.uname.slice(0,20);
    }
  }
}
