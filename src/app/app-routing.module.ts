import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserFormComponent } from './shared/component/users/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
     path:'users/addUser',
     component:UserFormComponent
  },
  {
    path:"users/:userId",
    component:UserComponent
  },
  {
    path:'users/:userId/edit',
    component:UserFormComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'fairs',
    component:FairsComponent
  },
  {
    path:'page-not-found',
    component:PageNotFoundComponent
  },
  {
    path:"**",
    redirectTo:'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
