import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatagoryComponent } from './pages/single-catagory/single-catagory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
   { path:'', component: HomeComponent},
   { path: 'caregory', component: SingleCatagoryComponent},
   { path: 'post', component: SinglePostComponent},

   { path: 'about', component: AboutUsComponent},
   { path: 'term-conditions', component: TermsAndConditionComponent},
   { path: 'contact', component: ContactUsComponent}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
