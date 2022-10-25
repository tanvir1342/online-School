import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  {path:"dashboard",component:StudentDashboardComponent},
  {path:"profile",component:StudentProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 export const routingComponants = [
  StudentDashboardComponent
 ]