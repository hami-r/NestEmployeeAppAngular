import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"/addEmp",
    component:AddEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
