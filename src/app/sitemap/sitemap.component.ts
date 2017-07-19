import {Component} from '@angular/core';
        import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';       
        import { FormsModule } from '@angular/forms';
        import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
        import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector: 'sitemap',
    templateUrl: 'sitemap.component.html',
    styleUrls: ['sitemap.css']
})
                
 
 
export class SitemapComponent {
    newCat: FirebaseListObservable < any[] > ;
    public datas: any = {};


name: string;
private sub: any;
    
constructor(db: AngularFireDatabase,private _router: Router,private router: Router){
        
this.newCat = db.list('/postcategory');
//let name=_router.url;
//let f_url = name.slice(9);
//console.log(f_url);
// this.datas = db.list('/posts', {
//  query: {
//    orderByChild: 'name',
//    equalTo: f_url
//   }
//});
////console.log(_router.url);
//this.datas.subscribe(queriedItems => {
//    if(queriedItems==''){
//        this.router.navigate(['/404']);
//    }
// // console.log(queriedItems);  
//});

}
    
}
