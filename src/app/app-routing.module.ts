import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AccountComponent } from './account/account.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { AddnewrestaurantComponent } from './addnewrestaurant/addnewrestaurant.component';

const routes: Routes = [
  {path:'owner-dashboard',component:OwnerDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'account',component:AccountComponent},
  { path: 'manage-menu/:id', component: ManageMenuComponent },
  {path:'addnewrestaurant',component:AddnewrestaurantComponent},
  {path:'',redirectTo:'account',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
