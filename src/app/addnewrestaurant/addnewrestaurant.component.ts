import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MydataService } from '../mydata.service';
import { AdRestaurant } from '../ad-restaurant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addnewrestaurant',
  templateUrl: './addnewrestaurant.component.html',
  styleUrls: ['./addnewrestaurant.component.css']
})
export class AddnewrestaurantComponent {

  constructor(private srv:MydataService,private router:Router){}
  OnNewRestaurant(frm:any)
  {
    console.log(frm.value);
    var rname=frm.value.rname;
    var rlocation=frm.value.rlocation;
    var rowner=frm.value.rowner;

    console.log(rname);
    var obj:AdRestaurant={name:rname,location:rlocation,owner:rowner};
    this.srv.AddNewRestaurant(obj).subscribe(
      {
        next:(res)=>{
          this.router.navigate(['admin-dashboard']);
        },
        error:()=>{

        }
      }
    )
  }
}
