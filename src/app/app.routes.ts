import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TeamComponent} from "./team/team.component";
import {EventsComponent} from "./events/events.component";
import {ContactComponent} from "./contact/contact.component";
import {MemberComponent} from "./member/member.component";

const APP_ROUTES:Routes=[
    { path:'',component:HomeComponent},
    { path:'member/:id',component:MemberComponent},
    { path:'team', component:TeamComponent},
    { path:'events', component:EventsComponent},
    { path:'contact', component:ContactComponent}

];
export const Routing = RouterModule.forRoot(APP_ROUTES);