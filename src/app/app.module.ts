import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { TemprefComponent } from './tempref/tempref.component';
import { ContentprojComponent } from './contentproj/contentproj.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { TestcpComponent } from './testcp/testcp.component';
import { ContentprojdemoComponent } from './contentprojdemo/contentprojdemo.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RegisteruserComponent,
    ReactiveformComponent,
    ComponentinteractionComponent,
    ChildcompComponent,
    TemprefComponent,
    ContentprojComponent,
    ViewchildComponent,
    TestcpComponent,
    ContentprojdemoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
