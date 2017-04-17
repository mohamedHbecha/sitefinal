/**
 * Created by Heisenberg on 16/04/2017.
 */
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class EventsService {

    constructor(private http:Http) { }

    getEvents() {
        return this.http.get('http://localhost:3000/api/events').map(res => res.json());
    }

    getEventsById(id:string){
        return this.http.get('http://localhost:3000/api/events/'+id).map(res=>res.json());
    }
}
