import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';
        import { AngularFireModule } from 'angularfire2';
        import { AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';
        //import { environment } from '../environments/environment';
        import {Ng2Webstorage} from 'ng2-webstorage';
        import {ButtonsModule, ModalModule } from 'ng2-bootstrap';
        import {BusyModule} from 'angular2-busy';
        import {FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
        import {HttpModule, JsonpModule} from '@angular/http';
        import {routing, appRoutingProviders} from './app.routing';
        import { TinymceModule } from 'angular2-tinymce';
        import * as gulp from 'gulp-angular2';
        import {gulpPrerender} from 'angular2-universal';
        import {App} from './app';
        //import { CKEditorModule  } from 'ng2-ckeditor';
      //import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
      
//import {LoginComponent} from './login/components/login-component';
        import {HomeComponent} from './home/home.component';
        import {FooterComponent} from './footer/footer.component';
        import {HeaderComponent} from './header/header.component';
        import {AboutComponent} from './about/about.component';
        import {NotfoundComponent} from './notfound/notfound.component';
        import {ContactComponent} from './contact/contact.component';
        import {PostComponent} from './post/components/post-component';
        //import {PostdetailsComponent} from './post/components/postdetails-component';
        import {CategoryComponent} from './category/components/category-component';
        import {AddpostComponent} from './addpost/components/addpost-component';
        import {SitemapComponent} from  './sitemap/sitemap.component';
        import {AddcategoryComponent} from './addcategory/components/addcategory-component';
//import {ChallengeComponent} from './challenge/components/challenge-component';
//import { CKEditorModule } from 'ng2-ckeditor';

        import {AppService} from './common/services/app-service';
        import {PostService} from './post/services/post-service';
        import {CategoryService} from './category/services/category-service';
        import {AddpostService} from './addpost/services/addpost-service';
        import {AddcategoryService} from './addcategory/services/addcategory-service';
//import {ChallengeService} from './challenge/services/challenge-service';
        export const environment = {
        production: false,
                firebase: {
                apiKey: 'AIzaSyCsvcVOzl62M_Ys_JKTCRp-gUle6VqTfls',
                        authDomain: 'futureworktechnologies-fae7c.firebaseapp.com',
                        databaseURL: 'https://futureworktechnologies-fae7c.firebaseio.com',
                        projectId: 'futureworktechnologies-fae7c',
                        storageBucket: 'futureworktechnologies-fae7c.appspot.com',
                        messagingSenderId: '1030144738119'
                }
        };
        gulp.task("prerender", () => {
    return gulp.src(['index.html'])
        .pipe(gulpPrerender({
            directives: [App]
        }));
});
        @NgModule({
        imports: [
                BrowserModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                JsonpModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFireDatabaseModule,
                routing,
                Ng2Webstorage,
                ButtonsModule,
                ModalModule,
                BusyModule,
                TinymceModule.withConfig({plugins: ['emoticons'],
                toolbar: 'emoticons'})
              
              
                //FroalaEditorModule.forRoot(),
                //FroalaViewModule.forRoot()
                
               
        ],
                declarations: [
                        AppComponent,
                        HomeComponent,
                        AboutComponent,
                        ContactComponent,
                        PostComponent,
                        CategoryComponent,
                        FooterComponent,
                        HeaderComponent,
                        AddpostComponent,
                        NotfoundComponent,
                        SitemapComponent,
                        AddcategoryComponent
                        
                        //PostdetailsComponent
                ],
                providers: [appRoutingProviders, AppService, PostService, CategoryService],
                bootstrap: [ AppComponent ]
        })
        export class AppModule {}