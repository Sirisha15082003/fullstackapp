import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { DbAccessService } from '../db-access.service';
import { UserInfo } from '../user-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  frmGroup:FormGroup;

  constructor(private fb:FormBuilder,private srv:DbAccessService,private router:Router){
  this.frmGroup=fb.group({
    uemail:new FormControl('',[Validators.required]),
    upassword:new FormControl('',[Validators.required]),
  });
}
OnLoginClick(){
  
  var uemail = this.frmGroup.controls['uemail'].value;
  var upassword = this.frmGroup.controls['upassword'].value;
  console.log(uemail);
  this.srv.GetAllUsers().subscribe({
    next:(res)=>{
      var AllUser=<UserInfo[]>res;
      console.log(AllUser);
      var FilterObj=AllUser.find((u)=>(u.email==uemail && u.password==upassword));
      if(FilterObj!=undefined)
      {
        //Store the user data into storage 
        sessionStorage.setItem('LoggedinUserData',JSON.stringify(FilterObj));
        switch(FilterObj.role.toUpperCase()){
          case 'ADMIN':{
            this.router.navigate(['admindashboard']);
            break;
          }
          case 'PM':{
            this.router.navigate(['pmdashboard']);
            break;
          }
          case 'MEMBER':{
            this.router.navigate(['memberdashboard']);
            break;
          }
        }
      }
    },
    error:(err)=>{

    }
  })
}
}