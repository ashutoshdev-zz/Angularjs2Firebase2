import {
    ModuleWithProviders
}
from
'@angular/core';
        import {Routes, RouterModule} from
'@angular/router';
//import {LoginComponent} from './login/components/login-component';
        import {HomeComponent} from
'./home/home.component';
        import {AboutComponent} from
'./about/about.component';
  import {NotfoundComponent} from
'./notfound/notfound.component';
        import {PostComponent} from
'./post/components/post-component';
// import {PostdetailsComponent} from
//'./post/components/postdetails-component';
        import {CategoryComponent} from
'./category/components/category-component';
 import {AddpostComponent} from
'./addpost/components/addpost-component';
import {AddcategoryComponent} from
'./addcategory/components/addcategory-component';
 import {ContactComponent} from
'./contact/contact.component';
import {SitemapComponent} from
'./sitemap/sitemap.component';
//import {ChallengeComponent} from './challenge/components/challenge-component';

        const appRoutes: Routes = [
        { path: '', component: HomeComponent },
        //{ path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: '404', component: NotfoundComponent },
        { path: 'category/:name', component: CategoryComponent },
        { path: 'addpost', component: AddpostComponent },
        { path: 'addcategory', component: AddcategoryComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'sitemap', component: SitemapComponent },
        
      //  { path: 'category/:name', component: SitemapComponent },
        { path: '**', component: PostComponent }
       // { path: 'post:/id', component: PostComponent },
        
        ];
        export const appRoutingProviders: any[] = [];
        export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
