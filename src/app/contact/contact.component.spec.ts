import {TestBed} from '@angular/core';

import {ContactComponent} from './contact.component';

describe('ContactComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [AboutComponent] }));

    it('should instantiate the ContactComponent', () => {
        let fixture = TestBed.createComponent(AboutComponent);
        expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create ContactComponent');
    });
});
