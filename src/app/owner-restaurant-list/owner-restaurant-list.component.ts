import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { AdRestaurant } from '../ad-restaurant';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent implements OnInit
{
  userId:string='2';
  ownRestList:AdRestaurant[]=[];
  constructor(private srv:MydataService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.RefreshView();
  }

  RefreshView(): void{
    this.srv.getRestaurantList().subscribe({next:(res)=>{
      var allRestList:AdRestaurant[]= <AdRestaurant[]>res;
      this.ownRestList=allRestList.filter(r=>r.owner==this.userId)
    },
    error:(err)=>{
      console.log(err);
    }
  });
  }

  ManageMenu(id:string):void{
    this.router.navigate(['/manage-menu', id]);
  }
}