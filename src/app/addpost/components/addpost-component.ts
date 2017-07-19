import {Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output} from '@angular/core';
        import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
        import {AddpostService} from '../services/addpost-service';
        import { FormsModule } from '@angular/forms';
        import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
        import { TinymceModule } from 'angular2-tinymce';
        import { arrayShuffle } from 'array-shuffle';
        
       // import { CKEditorModule  } from 'ng2-ckeditor';
        //import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
        @Component({
        selector: 'addpost',
                templateUrl:'../views/addpost.html',
                styleUrls: ['../views/addpost.css']
        })
        export class AddpostComponent{
        //title: string;
       
                posts: FirebaseListObservable < any[] > ;
                public newPost: any = {};
                description: String;
                onEditorKeyup = new EventEmitter<any>();
                editor;
                
                
      constructor(db: AngularFireDatabase) {
                    tinymce.init({
      selector: '#test1',
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          //console.log(content);
          this.onEditorKeyup.emit(content);
          this.description=content;
        });
      },       
    });
                             
        this.posts = db.list('/posts');
        
        }
               shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
        /**
         * create post 
         */
        createNewPost(){    
                this.newPost.catname="blog";
                var s_city = this.newPost.city.split(',');    
                var s_title = this.newPost.title;
                var s_param = this.newPost.param;
                var s_description= this.description;
                var s_metadescription= this.newPost.metadescription;
                var s_metakeywords= this.newPost.metakeywords;     
                for (var i in s_city){
                // title    
                var f_title = s_title.replace(/{city}/gi, s_city[i]);                
                this.newPost.title = f_title;
                // param
                var f_param = s_param.replace(/{city}/gi, s_city[i]);                
                this.newPost.param = f_param;
                //description
                var f_description = s_description.replace(/{city}/gi, s_city[i]);                
                this.newPost.description = f_description;
                //metadescription
                var f_metadescription = s_metadescription.replace(/{city}/gi, s_city[i]);                
                this.newPost.metadescription = f_description;
                //metakeywords
                var f_metakeywords = s_metakeywords.replace(/{city}/gi, s_city[i]);                
                this.newPost.metakeywords = f_metakeywords; 
                // add keyworrs
                var k_description= this.newPost.description;
                var k_keywords = this.newPost.keywords.split(',');
                const shuffled = this.shuffle(k_keywords);
                var count = k_description.match(/{keywords}/gi).length;
//                console.log(shuffled);
//                console.log(k_description);
//                console.log(count);
                for(var k=0; k<=count;k++){ 
                for (var j in shuffled){
                    var m_description=this.newPost.description;
                     var l_description = m_description.replace('{keywords}',shuffled[j]);                     
                     this.newPost.description = l_description;
                }
            }
               // console.log(this.newPost);
               // save post
                this.posts.push(this.newPost);
        } 
        } 
 
        }
        
        
        