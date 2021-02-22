import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { HomeComponent } from './home';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'calendar', component: CalendarComponent },

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
];

NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export const AppRoutingModule = RouterModule.forRoot(routes);



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/



export const appRoutingModule = RouterModule.forRoot(routes);