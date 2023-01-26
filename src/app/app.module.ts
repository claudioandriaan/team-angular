import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteProductModalComponent } from './components/delete-product-modal/delete-product-modal.component';
import { AddOrEditProductModalComponent } from './components/add-or-edit-product-modal/add-or-edit-product-modal.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { RouterOutlet, ROUTES } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
