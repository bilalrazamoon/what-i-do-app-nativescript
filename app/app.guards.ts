import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "./app.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        console.log("AuthGuard:isLoggedIn", AuthService.isLoggedIn);
        if (AuthService.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}

@Injectable()
export class UnAuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        console.log("UnAuthGuard:isLoggedIn", AuthService.isLoggedIn);
        if (!AuthService.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }
}
