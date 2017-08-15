"use strict";
var core_1 = require("@angular/core");
var app_service_1 = require("../../app.service");
var NoteCreateComponent = (function () {
    function NoteCreateComponent() {
        this.onDone = new core_1.EventEmitter();
    }
    NoteCreateComponent.prototype.ngOnInit = function () {
    };
    NoteCreateComponent.prototype.ngOnDestroy = function () {
    };
    NoteCreateComponent.prototype.onEnter = function () {
        if (this.value) {
            var uid = app_service_1.AuthService.uid;
            this.onDone.emit({
                created_at: Date.now(),
                created_by: uid || '',
                pinned: false,
                text: this.value || ''
            });
            this.value = '';
        }
    };
    return NoteCreateComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", String)
], NoteCreateComponent.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteCreateComponent.prototype, "onDone", void 0);
NoteCreateComponent = __decorate([
    core_1.Component({
        selector: "ns-note-create",
        moduleId: module.id,
        styleUrls: ["./note-create.component.css"],
        templateUrl: "./note-create.component.html",
    }),
    __metadata("design:paramtypes", [])
], NoteCreateComponent);
exports.NoteCreateComponent = NoteCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS1jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEY7QUFDMUYsaURBQWdEO0FBUWhELElBQWEsbUJBQW1CO0lBSTVCO1FBRlUsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBR3RDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHlDQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxHQUFHLEdBQUcseUJBQVcsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLFVBQVUsRUFBRSxHQUFHLElBQUksRUFBRTtnQkFDckIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTthQUN6QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQXpCYTtJQUFULGFBQU0sRUFBRTs7a0RBQWU7QUFDZDtJQUFULGFBQU0sRUFBRTs7bURBQTZCO0FBRjdCLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDMUMsV0FBVyxFQUFFLDhCQUE4QjtLQUM5QyxDQUFDOztHQUNXLG1CQUFtQixDQTBCL0I7QUExQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9hcHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ub3RlLWNyZWF0ZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL25vdGUtY3JlYXRlLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ub3RlLWNyZWF0ZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RlQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBPdXRwdXQoKSB2YWx1ZTogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICB9XG5cbiAgICBvbkVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdWlkID0gQXV0aFNlcnZpY2UudWlkO1xuICAgICAgICAgICAgdGhpcy5vbkRvbmUuZW1pdCh7XG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2J5OiB1aWQgfHwgJycsXG4gICAgICAgICAgICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnZhbHVlIHx8ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==