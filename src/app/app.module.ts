import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';

import {MemberService} from "./member.service";
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { Routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    TeamComponent,
    ContactComponent,
    NavbarComponent,
    EventsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
