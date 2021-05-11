import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'user' , component: UsersComponent},
  {path: 'user/:login' , component: ProfilePageComponent},
  {path: '' ,  redirectTo:'/user', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
