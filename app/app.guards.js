"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("./app.service");
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log("AuthGuard:isLoggedIn", app_service_1.AuthService.isLoggedIn);
        if (app_service_1.AuthService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var UnAuthGuard = (function () {
    function UnAuthGuard(router) {
        this.router = router;
    }
    UnAuthGuard.prototype.canActivate = function (next, state) {
        console.log("UnAuthGuard:isLoggedIn", app_service_1.AuthService.isLoggedIn);
        if (!app_service_1.AuthService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return UnAuthGuard;
}());
UnAuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], UnAuthGuard);
exports.UnAuthGuard = UnAuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmd1YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5ndWFyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQywwQ0FBbUc7QUFDbkcsNkNBQTRDO0FBSTVDLElBQWEsU0FBUztJQUNsQixtQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxJQUE0QixFQUM1QixLQUEwQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLHlCQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTtxQ0FFbUIsZUFBTTtHQUR6QixTQUFTLENBYXJCO0FBYlksOEJBQVM7QUFnQnRCLElBQWEsV0FBVztJQUNwQixxQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxJQUE0QixFQUM1QixLQUEwQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHlCQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVtQixlQUFNO0dBRHpCLFdBQVcsQ0FhdkI7QUFiWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hcHAuc2VydmljZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgICAgICAgICAgICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBdXRoR3VhcmQ6aXNMb2dnZWRJblwiLCBBdXRoU2VydmljZS5pc0xvZ2dlZEluKTtcbiAgICAgICAgaWYgKEF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbkF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVuQXV0aEd1YXJkOmlzTG9nZ2VkSW5cIiwgQXV0aFNlcnZpY2UuaXNMb2dnZWRJbik7XG4gICAgICAgIGlmICghQXV0aFNlcnZpY2UuaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=