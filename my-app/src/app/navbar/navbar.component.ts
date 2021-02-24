import { Component } from '@angular/core';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';


import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  
})

export class NavBarComponent {
    title = 'Hello : )';
    currentUser: User;
    users: User[] = [];
    currentUserSubscription: Subscription;

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/