import { Injectable } from '@angular/core';
import { AdUser } from './ad-user';
import { AdRestaurant } from './ad-restaurant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http:HttpClient) { 


  }
  getUserList():Observable<any>{
    return this.http.get("http://localhost:3004/userInfo");
    
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(`http://localhost:3004/userInfo/${id}`);
  }

  getRestaurantList():Observable<any>{
    return this.http.get("http://localhost:3004/restaurantInfo");
  }
  deleteRest(id:string):Observable<any>{
    return this.http.delete(`http://localhost:3004/restaurantInfo/${id}`);
  }

  getMenuList():Observable<any>{
    return this.http.get("http://localhost:3004/menu");
  }
  
  AddNewRestaurant(obj:AdRestaurant){
    return this.http.post("http://localhost:3004/restaurantInfo",obj);
  }

  AddNewMenu(obj:Menu){
    return this.http.post("http://localhost:3004/menu",obj);
  }
  
}
