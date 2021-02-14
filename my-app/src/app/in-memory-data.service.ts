import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Juliana Carvalho',  company: '-',  phone: '11 99862-4832',   relationship:'Friend'},
      { id: 12, name: 'Diego Prado',    company: '-',  phone: '11 99862-4832',   relationship:'Family'},
      { id: 13, name: 'Laura Silva',    company: 'GOL',  phone: '11 99862-4832',   relationship:'Work'},
      { id: 14, name: 'Pedro Almeida',    company: '-',  phone: '11 99862-4832',   relationship:'Friend'},
      { id: 15, name: 'Thais Valls',    company: 'GOL',  phone: '11 99862-4832',   relationship:'Work'},
      { id: 16, name: 'Jéssica Nunes',  company: '-',  phone: '11 99862-4832',   relationship:'Family'},
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