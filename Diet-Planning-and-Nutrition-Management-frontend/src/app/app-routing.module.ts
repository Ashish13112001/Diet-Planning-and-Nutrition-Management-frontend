import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserComponent } from './user/user.component';
import { DieticianComponent } from './dietician/dietician.component';
import { ResolveProblemComponent } from './resolve-problem/resolve-problem.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' } ,
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'contactus', component:ContactUsComponent},
  {path: 'user', component: UserComponent},
  {path: 'dietician', component: DieticianComponent},
  {path: 'resolve', component: ResolveProblemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
