import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "ui/page";
import { AuthService, DatabaseService } from "../app.service";

@Component({
    selector: "ns-register",
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
    loading: boolean;
    error: string;
    _errorTimeOut;
    user = {
        name: '',
        email: '',
        password: ''
    };

    constructor(private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    register() {
        console.log('Register: user', JSON.stringify(this.user));
        this.loading = true;
        if (this.error) {
            this.error = '';
        }
        if (this._errorTimeOut) {
            clearTimeout(this._errorTimeOut);
            this._errorTimeOut = null;
        }
        AuthService.createUser(this.user)
            .then(auth => {
                console.log('Login:auth', JSON.stringify(auth));
                let uid = AuthService.uid;
                return DatabaseService.set(`/users/${uid}`, {
                    name: this.user.name,
                    image: 'assets/avatar.png',
                    email: this.user.email,
                })
            })
            .then(user => {
                console.log('User:created', user);
                this.loading = false;
                this.router.navigate(['/']);
            })
            .catch(error => {
                console.log('Login:error', error);
                this.error = error && error.message || 'Login Error';
                this._errorTimeOut = setTimeout(_ => {
                    this.error = '';
                    this._errorTimeOut = null;
                }, 5000);
                this.loading = false;
            });
    }

}