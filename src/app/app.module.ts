import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignComponent } from './sign/sign.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UsernavComponent } from './usernav/usernav.component';
import { PrepareComponent } from './prepare/prepare.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { CollabComponent } from './collab/collab.component';
import { ContestComponent } from './contest/contest.component';
import { CourseComponent } from './course/course.component';
import { CourseModuleComponent } from './course-module/course-module.component';
import { QuizComponent } from './quiz/quiz.component';
import { LognavComponent } from './lognav/lognav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SignComponent,
    UserDashboardComponent,
    UsernavComponent,
    PrepareComponent,
    AssesmentComponent,
    CollabComponent,
    ContestComponent,
    CourseComponent,
    CourseModuleComponent,
    QuizComponent,
    LognavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
