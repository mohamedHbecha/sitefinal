import { Component, OnInit, OnDestroy } from '@angular/core';
import {EventsService} from "../events.service";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit,OnDestroy {

  events: Object;
  id: string;
  private sub: Subscription;
  constructor(private eventsService: EventsService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];
          console.log(this.id);
          this.events = this.eventsService.getEventsById(this.id).subscribe(
              events => {
                this.events = events.data ;
                console.log(events);
              }
          );

        }
    );


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
