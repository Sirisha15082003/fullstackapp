import { Component, OnInit } from '@angular/core';
import { AdUser } from '../ad-user';
import { MydataService } from '../mydata.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ad-user-list',
  templateUrl: './ad-user-list.component.html',
  styleUrls: ['./ad-user-list.component.css']
})
export class AdUserListComponent implements OnInit{
  userList:AdUser[]=[];

  constructor(private srv:MydataService){

  }

  ngOnInit():void{
    // var srv = new MydataService();
    this.srv.getUserList().subscribe({next:(res)=>{
      this.userList=<AdUser[]>res;
    },
    error:(err)=>{
      console.log(err);
    }
  });
  }

  RefreshView():void{
    this.srv.getUserList().subscribe({next:(res)=>{
      this.userList=<AdUser[]>res;
    },
    error:(err)=>{
      console.log(err);
    }
  });
  }

  DeleteUser(id:string):void{
    this.srv.deleteUser(id).subscribe({
      next:()=>{
        this.RefreshView();
      },
      error:(err)=>{

      }
    })
  }
}
