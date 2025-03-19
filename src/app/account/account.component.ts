import { Component } from '@angular/core';
import { MydataService } from '../mydata.service';
import { AdUser } from '../ad-user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  email: string = '';
  password: string = '';
  msg: string = '';

  constructor(private srv: MydataService, private route: Router, private authService: AuthService) {}

  onLogin() {
    this.srv.getUserList().subscribe({
      next: (res) => {
        console.log(this.email);
        console.log(this.password);
        var AllUser: AdUser[] = <AdUser[]>res;
        var curUsr = AllUser.filter(u => { return (u.email == this.email && u.password == this.password) });
        console.log(curUsr);
        if (curUsr.length > 0) {
          var LoggedInUser = curUsr[0];
          localStorage.setItem("LoggedInUser", JSON.stringify(LoggedInUser));
          this.authService.logIn(); 
          switch (LoggedInUser.role.toUpperCase()) {
            case 'ADMIN':
              this.route.navigate(['admin-dashboard']);
              break;
            case 'OWNER':
              this.route.navigate(['owner-dashboard']);
              break;
          }
          this.msg = "Login Success";
        } else {
          this.msg = "Login Failed";
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}