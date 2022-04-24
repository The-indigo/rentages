import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { DesktopsComponent } from './desktops/desktops.component';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComputerDetailComponent } from './computer-detail/computer-detail.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token') || '' ; 
}

@NgModule({
  declarations: [
    AppComponent,
    LaptopsComponent,
    DesktopsComponent,
    ServersComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComputerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot(),
     JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
     FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
