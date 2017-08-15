"use strict";
var core_1 = require("@angular/core");
var NoteListComponent = (function () {
    function NoteListComponent() {
    }
    NoteListComponent.prototype.ngOnInit = function () {
    };
    NoteListComponent.prototype.ngOnDestroy = function () {
    };
    NoteListComponent.prototype.onSetupItemView = function (args) {
    };
    NoteListComponent.prototype.onItemLoading = function (args) {
        if (args.android) {
            // args.android is instance of ListView
            var lv = args.android;
            lv.setDivider(null);
        }
        if (args.ios) {
            // args.ios is instance of UITableViewCell
            var cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyleNone;
            cell.separatorStyle = UITableViewCellSeparatorStyleNone;
            cell.separatorInset = UIEdgeInsetsZero;
        }
    };
    return NoteListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], NoteListComponent.prototype, "notes", void 0);
NoteListComponent = __decorate([
    core_1.Component({
        selector: "ns-note-list",
        moduleId: module.id,
        styleUrls: ["./note-list.component.css"],
        templateUrl: "./note-list.component.html",
    }),
    __metadata("design:paramtypes", [])
], NoteListComponent);
exports.NoteListComponent = NoteListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQVlwRSxJQUFhLGlCQUFpQjtJQUcxQjtJQUNBLENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHVDQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixJQUF1QjtJQUN2QyxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLElBQW1CO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsdUNBQXVDO1lBQ3ZDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCwwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLGlDQUFpQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsaUNBQWlDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTdCWTtJQUFSLFlBQUssRUFBRTs7Z0RBQWM7QUFEYixpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztRQUN4QyxXQUFXLEVBQUUsNEJBQTRCO0tBQzVDLENBQUM7O0dBQ1csaUJBQWlCLENBOEI3QjtBQTlCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5cbmRlY2xhcmUgbGV0IFVJRWRnZUluc2V0c1plcm8sIFVJVGFibGVWaWV3Q2VsbFNlcGFyYXRvclN0eWxlTm9uZSwgVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGVOb25lO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ub3RlLWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi9ub3RlLWxpc3QuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL25vdGUtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBub3RlczogYW55W107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICB9XG5cbiAgICBvblNldHVwSXRlbVZpZXcoYXJnczogU2V0dXBJdGVtVmlld0FyZ3MpIHtcbiAgICB9XG5cbiAgICBvbkl0ZW1Mb2FkaW5nKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcbiAgICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAgICAgLy8gYXJncy5hbmRyb2lkIGlzIGluc3RhbmNlIG9mIExpc3RWaWV3XG4gICAgICAgICAgICBsZXQgbHYgPSBhcmdzLmFuZHJvaWQ7XG4gICAgICAgICAgICBsdi5zZXREaXZpZGVyKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmlvcykge1xuICAgICAgICAgICAgLy8gYXJncy5pb3MgaXMgaW5zdGFuY2Ugb2YgVUlUYWJsZVZpZXdDZWxsXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGFyZ3MuaW9zO1xuICAgICAgICAgICAgY2VsbC5zZWxlY3Rpb25TdHlsZSA9IFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlTm9uZTtcbiAgICAgICAgICAgIGNlbGwuc2VwYXJhdG9yU3R5bGUgPSBVSVRhYmxlVmlld0NlbGxTZXBhcmF0b3JTdHlsZU5vbmU7XG4gICAgICAgICAgICBjZWxsLnNlcGFyYXRvckluc2V0ID0gVUlFZGdlSW5zZXRzWmVybztcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==