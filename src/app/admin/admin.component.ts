import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserInfo } from '../userInfo';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private authService: AuthService, private router: Router) {
    let state = this.router.getCurrentNavigation().extras.state;
    this.userInfo = new UserInfo(state.username, state.firstname, state.lastname);

  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
