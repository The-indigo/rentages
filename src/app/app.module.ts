import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { DesktopsComponent } from './desktops/desktops.component';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token') || '' ; 
}

@NgModule({
  declarations: [
    AppComponent,
    LaptopsComponent,
    DesktopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
