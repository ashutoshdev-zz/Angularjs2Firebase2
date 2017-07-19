import {Component,OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import {PostService} from '../services/post-service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
selector: 'post',
        templateUrl:'../views/post.html'
        })

export class PostComponent{
posts: FirebaseListObservable < any[] > ;
public datas: any = {};


param: string;
private sub: any;
  
constructor(db: AngularFireDatabase,private _router: Router,private router: Router){
let myparam=_router.url;
let f_url = myparam.slice(1);
//console.log(f_url);
 this.datas = db.list('/posts', {
  query: {
    orderByChild: 'param',
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
