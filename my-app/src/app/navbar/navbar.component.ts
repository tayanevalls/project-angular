import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/_services/theme.service';
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

    theme: string = 'light';
    

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

    constructor(
      private themeService: ThemeService, private renderer: Renderer2,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }
  ngOnInit(): void {
  }

  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else  {
      this.theme = 'light';
    }

    this.themeService.setTheme(this.theme)
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/