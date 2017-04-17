import {Component, OnInit, OnDestroy} from '@angular/core';
import {MemberService} from "../member.service";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit,OnDestroy {

  member: Object;
  id: string;
  private sub: Subscription;

  constructor(private memberService: MemberService,
              private router: Router,
              private route: ActivatedRoute,) {
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];
          console.log(this.id);
          this.member = this.memberService.getMemberById(this.id).subscribe(
              member => {
                  this.member = member.data ;
                  console.log(member);
              }
          );

        }
    );


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}