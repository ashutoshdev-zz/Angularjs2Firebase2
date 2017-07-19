import {TestBed} from '@angular/core';

import {NotfoundComponent} from './notfound.component';

describe('NotfoundComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [NotfoundComponent] }));

    it('should instantiate the NotfoundComponent', () => {
        let fixture = TestBed.createComponent(NotfoundComponent);
        expect(fixture.componentInstance instanceof NotfoundComponent).toBe(true, 'should create NotfoundComponent');
    });
});
