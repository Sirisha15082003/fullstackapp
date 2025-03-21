import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent {
  @Input()udata:Userdata|undefined;
  GetStyle():any{
    return {
      'ShowRed': (this.udata==undefined?false:this.udata.age>20),'boldText':(this.udata==undefined?false:this.udata.age>20)
    };
  }
  
}
