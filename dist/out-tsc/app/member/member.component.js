var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MemberService } from "../member.service";
import { Router, ActivatedRoute } from "@angular/router";
export var MemberComponent = (function () {
    function MemberComponent(memberService, router, route) {
        this.memberService = memberService;
        this.router = router;
        this.route = route;
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            _this.member = _this.memberService.getMemberById(_this.id).subscribe(function (member) {
                _this.member = member.data;
                console.log(member);
            });
        });
    };
    MemberComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MemberComponent = __decorate([
        Component({
            selector: 'member',
            templateUrl: './member.component.html',
            styleUrls: ['./member.component.css']
        }), 
        __metadata('design:paramtypes', [MemberService, Router, ActivatedRoute])
    ], MemberComponent);
    return MemberComponent;
}());
//# sourceMappingURL=/home/mahdi/Bureau/PPP/Labo/src/app/member/member.component.js.map