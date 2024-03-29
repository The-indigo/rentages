import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const loggedIn = this.authService.isloggedIn()
        if (loggedIn) {
            return true
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
        return false
    }
}