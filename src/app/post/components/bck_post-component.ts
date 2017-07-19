import {Component} from '@angular/core';
// import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {PostService} from '../services/post-service';

@Component({
    selector: 'post',
    templateUrl:'../views/post.html'
})

export class PostComponent{
//    title: string;
//    message: string;
//    products:Array<any>;
//    currentUser: any = {};
//    items: FirebaseListObservable<any[]>;
//    public newProd: any = {};
//    public newUser: any = {};
//   
//
//    constructor(
//        public postService: PostService, 
//        public af: AngularFireDatabase
//        ){
//        // this.title = 'Product Page';
//        this.message = 'This is product page';
//        //this.products = postService.getProducts();
//        //this.items = af.database.list('/items'); // Fetch all data 
//        
//        //Fetch data by some value
////        this.items = af.list('/items', {
////           query: {
////                orderByChild: 'prodName',
////                equalTo: 'P1'
////           }
////        });
//      // this.doLogin();
//
//    }

//    createNewPost(){
//        console.info('Model ::: ', this.newProd);
//        this.items.push(this.newProd);
//    }

//    createNewUser(){
//        this.af.auth.createUser({email: 'gopiwrld@gmail.com', password: '1234567890'}).catch(function(error:any){
//            console.info('Error ::: ', error);
//            var errorCode = error.code;
//            var errorMessage = error.message;
//       });
//    }
//    doLogin(){
//        var that = this;
//        this.af.auth.login({email: 'gopiwrld@gmail.com', password:'1234567890'},{ provider: AuthProviders.Password, method: AuthMethods.Password}).then(function(response:any){
//            console.log('response ::: ', response);
//            that.currentUser = response.auth;
//        });
//    }

//    updateUser(){
//        this.currentUser.updateProfile({
//            displayName: "Gopinath Updated",
//            photoURL: "https://example.com/jane-q-user/profile.jpg"
//        }).then(function(response:any) {
//            // Update successful.
//            console.log('Profile updated successfully ::::: ', response);
//        }, function(error:any) {
//        // An error happened.
//         console.log('Error occurred ::: ', error);
//        });
//
//    }
}