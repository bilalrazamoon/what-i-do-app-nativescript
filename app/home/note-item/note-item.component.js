"use strict";
var core_1 = require("@angular/core");
var NoteItemComponent = (function () {
    function NoteItemComponent() {
        this.onPin = new core_1.EventEmitter();
        this.onUnPin = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
    }
    NoteItemComponent.prototype.ngOnInit = function () {
    };
    NoteItemComponent.prototype.ngOnDestroy = function () {
    };
    NoteItemComponent.prototype.togglePin = function () {
        console.log("togglePin", this.note.pinned);
        if (this.note.pinned) {
            this.onUnPin.emit(this.note);
        }
        else {
            this.onPin.emit(this.note);
        }
    };
    return NoteItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "note", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "onPin", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "onUnPin", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "onComplete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "onRemove", void 0);
NoteItemComponent = __decorate([
    core_1.Component({
        selector: "ns-note-item",
        moduleId: module.id,
        styleUrls: ["./note-item.component.css"],
        templateUrl: "./note-item.component.html",
    }),
    __metadata("design:paramtypes", [])
], NoteItemComponent);
exports.NoteItemComponent = NoteItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwRjtBQVExRixJQUFhLGlCQUFpQjtJQU8xQjtRQUxVLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMzQixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2hDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUd4QyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBeEJZO0lBQVIsWUFBSyxFQUFFOzsrQ0FBTTtBQUNKO0lBQVQsYUFBTSxFQUFFOztnREFBNEI7QUFDM0I7SUFBVCxhQUFNLEVBQUU7O2tEQUE4QjtBQUM3QjtJQUFULGFBQU0sRUFBRTs7cURBQWlDO0FBQ2hDO0lBQVQsYUFBTSxFQUFFOzttREFBK0I7QUFML0IsaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDeEMsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDOztHQUNXLGlCQUFpQixDQXlCN0I7QUF6QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW5vdGUtaXRlbVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL25vdGUtaXRlbS5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbm90ZS1pdGVtLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIG5vdGU7XG4gICAgQE91dHB1dCgpIG9uUGluID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblVuUGluID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvbkNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgIH1cblxuICAgIHRvZ2dsZVBpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2dnbGVQaW5cIiwgdGhpcy5ub3RlLnBpbm5lZCk7XG4gICAgICAgIGlmICh0aGlzLm5vdGUucGlubmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uVW5QaW4uZW1pdCh0aGlzLm5vdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblBpbi5lbWl0KHRoaXMubm90ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=