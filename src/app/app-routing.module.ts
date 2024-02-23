import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { UsernavComponent } from './usernav/usernav.component';
import { PrepareComponent } from './prepare/prepare.component';
import { CourseComponent } from './course/course.component';
import { CourseModuleComponent } from './course-module/course-module.component';
import { QuizComponent } from './quiz/quiz.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ContestComponent } from './contest/contest.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { CollabComponent } from './collab/collab.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/navbar/home', pathMatch: 'full' },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignComponent },
    ],
  },
  {
    path: 'usernav',
    component: UsernavComponent,
    children: [
      { path: 'Prepare', component: PrepareComponent },
      { path: 'course/:id', component: CourseComponent},
      { path: 'course-module/:id', component: CourseModuleComponent },
      {path: 'quiz/:courseName/:topicName', component: QuizComponent},
      { path: 'user-dashboard', component: UserDashboardComponent }, 
      { path: 'contest', component: ContestComponent },
      { path: 'Assesment', component: AssesmentComponent },
      { path: 'collab', component: CollabComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
