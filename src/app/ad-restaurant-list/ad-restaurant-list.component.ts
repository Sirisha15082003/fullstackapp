import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { AdRestaurant } from '../ad-restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-restaurant-list',
  templateUrl: './ad-restaurant-list.component.html',
  styleUrls: ['./ad-restaurant-list.component.css']
})
export class AdRestaurantListComponent implements OnInit {
  restaurantList: AdRestaurant[] = [];

  constructor(private srv: MydataService, private router: Router) {}

  ngOnInit(): void {
    this.RefreshView();
  }

  RefreshView(): void {
    this.srv.getRestaurantList().subscribe({
      next: (res) => {
        this.restaurantList = <AdRestaurant[]>res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  DeleteRest(id: string): void {
    this.srv.deleteRest(id).subscribe({
      next: () => {
        this.RefreshView();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}