       import {Component} from '@angular/core';
        import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';       
        import {CategoryService} from '../services/category-service';
        import { FormsModule } from '@angular/forms';
        import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
        import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector: 'category',
    templateUrl:'../views/category.html'
})


export class CategoryComponent{   
name: string;
private sub: any;
public datas: any = {};
    
constructor(db: AngularFireDatabase,private _router: Router,private router: Router){        
let name=_router.url;
let f_url = name.slice(10);
console.log(f_url);
 this.datas = db.list('/posts', {
  query: {
    orderByChild: 'catname',
    equalTo: f_url
   }
});
//console.log(_router.url);
this.datas.subscribe(queriedItems => {
    if(queriedItems==''){
        this.router.navigate(['/404']);
    }
 // console.log(queriedItems);  
});

}

}