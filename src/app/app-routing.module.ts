import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
     path: '',
     component: CreateComponent
   },
   {
     path: 'details',
     component: DetailComponent
   },
   {
     path: 'details/update/:id',
     component: UpdateComponent
   }

 ];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
