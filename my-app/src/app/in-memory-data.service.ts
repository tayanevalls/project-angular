import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',   company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 12, name: 'Narco',     company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 13, name: 'Bombasto',  company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 14, name: 'Celeritas', company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 15, name: 'Magneta',   company: 'GOL',  phone: '11 99862-4832',   whats:'no'},
      { id: 16, name: 'RubberMan', company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 17, name: 'Dynama',    company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 18, name: 'Dr IQ',     company: 'GOL',  phone: '11 99862-4832',   whats:'no'},
      { id: 19, name: 'Magma',     company: 'GOL',  phone: '11 99862-4832',   whats:'yes'},
      { id: 20, name: 'Tornado',   company: 'GOL',  phone: '11 99862-4832',   whats:'no'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/