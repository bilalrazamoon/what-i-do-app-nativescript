import { Component, OnInit, OnDestroy } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { Page } from "ui/page";
import { AuthService } from "../app.service";

@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    loading: boolean;
    error: string;
    _errorTimeOut;
    user = {
        email: '',
        password: ''
    };

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    login() {
        console.log('Login: user', JSON.stringify(this.user));
        if (!(this.user.email && this.user.password)) return;
        this.loading = true;
        if (this.error) {
            this.error = '';
        }
        if (this._errorTimeOut) {
            clearTimeout(this._errorTimeOut);
            this._errorTimeOut = null;
        }
        AuthService.login(this.user)
            .then(auth => {
                console.log('Login:auth', JSON.stringify(auth));
                this.loading = false;
                this.routerExtensions.navigate(['/'], {clearHistory: true});
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
