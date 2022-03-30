import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { DesktopsComponent } from './desktops/desktops.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { ServersComponent } from './servers/servers.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'desktops', component: DesktopsComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'servers', component: ServersComponent },  
    {path: 'computers/:id', component: ComputerDetailComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





