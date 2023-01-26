import { Component } from '@angular/core';
import { RouterOutlet, ROUTES } from '@angular/router';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `

})
export class EventsAppComponent {
  title = 'Angular Fundamentals';
}
