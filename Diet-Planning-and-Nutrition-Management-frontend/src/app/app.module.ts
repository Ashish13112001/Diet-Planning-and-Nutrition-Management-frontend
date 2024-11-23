import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserComponent } from './user/user.component';
import { DieticianComponent } from './dietician/dietician.component';
import { ResolveProblemComponent } from './resolve-problem/resolve-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ContactUsComponent,
    UserComponent,
    DieticianComponent,
    ResolveProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
