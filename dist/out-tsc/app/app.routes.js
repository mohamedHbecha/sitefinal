import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from "./team/team.component";
import { EventsComponent } from "./events/events.component";
import { ContactComponent } from "./contact/contact.component";
import { MemberComponent } from "./member/member.component";
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'member/:id', component: MemberComponent },
    { path: 'team', component: TeamComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent }
];
export var Routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=/home/mahdi/Bureau/PPP/Labo/src/app/app.routes.js.map