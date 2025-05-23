import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {path: 'usuarios', component: UserListComponent},
  {path: 'formulario', component: UserFormComponent},
  { path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: '**', redirectTo: 'usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
