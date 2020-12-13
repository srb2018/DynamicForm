import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch : 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dynamicform', component: DynamicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }