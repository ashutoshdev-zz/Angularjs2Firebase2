import {Injectable } from '@angular/core';

@Injectable()
export class AddpostService{
    post : Array<any>;

    constructor (){
        this.post = [{id: 1, code: '01001', name: 'Prod 1'},{id: 2, code: '01002', name: 'Prod 2'},{id: 3, code: '01003', name: 'Prod 3'}]
    }

    getProducts() {
        return this.post;
    }
}