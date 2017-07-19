import {Injectable} from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class CategoryService{
    
    public categories:FirebaseListObservable<any[]>;
    
    constructor(private af: AngularFireDatabase){
        
    }

    getCategories(){
       return this.categories = this.af.list('/categories');
    }

}

