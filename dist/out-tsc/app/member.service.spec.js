import { TestBed, inject } from '@angular/core/testing';
import { MemberService } from './member.service';
describe('MemberService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MemberService]
        });
    });
    it('should ...', inject([MemberService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/mahdi/Bureau/PPP/Labo/src/app/member.service.spec.js.map