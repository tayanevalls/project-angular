import { Component } from '@angular/core';
import {
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { startOfDay, isSameMonth, isSameDay, subDays, endOfMonth }from 'date-fns';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: subDays(endOfMonth(new Date()), 2),
      title: 'Hello',
      allDay: true,
    },
  ]
}

