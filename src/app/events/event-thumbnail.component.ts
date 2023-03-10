import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()"   [ngSwitch]="event?.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10: 00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event?.location.city}}, {{event?.location.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
          Online URL: {{event?.onlineUrl}}
      </div>

  </div>
  `,
  styles:  [`
    .bold { font-weight: bold;}
    .green { color: #003300 !important}
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div{ color: #bbb; }
  `]

})
export class EventThumbnailComponent{
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    handleClickMe(){
     this.eventClick.emit(this.event.name);
    }
    getStartTimeClass(){
      const isEarlyStart = this.event && this.event.time === '8:00 am'
      return { green: isEarlyStart, bold: isEarlyStart}
    }

}
