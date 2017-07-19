import {Component} from '@angular/core';
        import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
        import {AddcategoryService} from '../services/addcategory-service';
        import { FormsModule } from '@angular/forms';
        import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
        @Component({
        selector: 'addcategory',
                templateUrl:'../views/addcategory.html',
                styleUrls: ['../views/addcategory.css']
        })
        export class AddcategoryComponent{

                public newCatdata: any = {};
                newCat: FirebaseListObservable < any[] > ;
                
           
                
                
      constructor(db: AngularFireDatabase) {
                   
                             
        this.newCat = db.list('/postcategory');
        
        }
               
        /**
         * create post 
         */
        createNewcategory(){    
                 this.newCat.push(this.newCatdata);
        } 
        } 
 
        
        
        
        