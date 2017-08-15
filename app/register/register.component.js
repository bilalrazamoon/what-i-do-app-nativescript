"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var app_service_1 = require("../app.service");
var RegisterComponent = (function () {
    function RegisterComponent(page, router) {
        this.page = page;
        this.router = router;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
        this.page.actionBarHidden = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log('Register: user', JSON.stringify(this.user));
        this.loading = true;
        if (this.error) {
            this.error = '';
        }
        if (this._errorTimeOut) {
            clearTimeout(this._errorTimeOut);
            this._errorTimeOut = null;
        }
        app_service_1.AuthService.createUser(this.user)
            .then(function (auth) {
            console.log('Login:auth', JSON.stringify(auth));
            var uid = app_service_1.AuthService.uid;
            return app_service_1.DatabaseService.set("/users/" + uid, {
                name: _this.user.name,
                image: 'assets/avatar.png',
                email: _this.user.email,
            });
        })
            .then(function (user) {
            console.log('User:created', user);
            _this.loading = false;
            _this.router.navigate(['/']);
        })
            .catch(function (error) {
            console.log('Login:error', error);
            _this.error = error && error.message || 'Login Error';
            _this._errorTimeOut = setTimeout(function (_) {
                _this.error = '';
                _this._errorTimeOut = null;
            }, 5000);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "ns-register",
        moduleId: module.id,
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQiw4Q0FBOEQ7QUFROUQsSUFBYSxpQkFBaUI7SUFVMUIsMkJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTnRELFNBQUksR0FBRztZQUNILElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFHRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsdUNBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBa0NDO1FBakNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUM7UUFDRCx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxHQUFHLEdBQUcseUJBQVcsQ0FBQyxHQUFHLENBQUM7WUFDMUIsTUFBTSxDQUFDLDZCQUFlLENBQUMsR0FBRyxDQUFDLFlBQVUsR0FBSyxFQUFFO2dCQUN4QyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNwQixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixLQUFLLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3pCLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDO1lBQ3JELEtBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFVBQUEsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQzFDLENBQUM7cUNBVzRCLFdBQUksRUFBa0IsZUFBTTtHQVY3QyxpQkFBaUIsQ0F3RDdCO0FBeERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuLi9hcHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1yZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIF9lcnJvclRpbWVPdXQ7XG4gICAgdXNlciA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyOiB1c2VyJywgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yVGltZU91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Vycm9yVGltZU91dCk7XG4gICAgICAgICAgICB0aGlzLl9lcnJvclRpbWVPdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIEF1dGhTZXJ2aWNlLmNyZWF0ZVVzZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnRoZW4oYXV0aCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luOmF1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHVpZCA9IEF1dGhTZXJ2aWNlLnVpZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0YWJhc2VTZXJ2aWNlLnNldChgL3VzZXJzLyR7dWlkfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnYXNzZXRzL2F2YXRhci5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXI6Y3JlYXRlZCcsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbjplcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IgJiYgZXJyb3IubWVzc2FnZSB8fCAnTG9naW4gRXJyb3InO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yVGltZU91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JUaW1lT3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==