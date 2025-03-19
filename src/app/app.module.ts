import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './useritem/useritem.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdUserListComponent } from './ad-user-list/ad-user-list.component';
import { AdRestaurantListComponent } from './ad-restaurant-list/ad-restaurant-list.component';
import { MydataService } from './mydata.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerRestaurantListComponent } from './owner-restaurant-list/owner-restaurant-list.component';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { AddnewrestaurantComponent } from './addnewrestaurant/addnewrestaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UseritemComponent,
    AddUserComponent,
    AdminDashboardComponent,
    AdUserListComponent,
    AdRestaurantListComponent,
    AccountComponent,
    OwnerDashboardComponent,
    OwnerRestaurantListComponent,
    NavbarComponent,
    ManageMenuComponent,
    AddnewrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MydataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
