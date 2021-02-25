import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/_services/theme.service';

import { AuthenticationService } from './_services';
import { User } from './_models';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;


    constructor(
        private themeService: ThemeService, private renderer: Renderer2,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    ngOnInit(): void {
        this.themeService.themeChanges().subscribe(theme => {
          if (theme.oldValue) {
            this.renderer.removeClass(document.body, theme.oldValue);
          }
          this.renderer.addClass(document.body, theme.newValue);
        })
      }
    
}