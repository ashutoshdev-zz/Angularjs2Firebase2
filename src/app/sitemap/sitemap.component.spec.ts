import {TestBed} from '@angular/core';

import {AboutComponent} from './sitemap.component';

describe('SitemapComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [SitemapComponent] }));

    it('should instantiate the SitemapComponent', () => {
        let fixture = TestBed.createComponent(SitemapComponent);
        expect(fixture.componentInstance instanceof SitemapComponent).toBe(true, 'should create SitemapComponent');
    });
});
