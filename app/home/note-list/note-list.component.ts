import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SetupItemViewArgs } from "nativescript-angular";
import { ItemEventData } from "ui/list-view";

declare let UIEdgeInsetsZero, UITableViewCellSeparatorStyleNone, UITableViewCellSelectionStyleNone;

@Component({
    selector: "ns-note-list",
    moduleId: module.id,
    styleUrls: ["./note-list.component.css"],
    templateUrl: "./note-list.component.html",
})
export class NoteListComponent implements OnInit, OnDestroy {
    @Input() notes: any[];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    onSetupItemView(args: SetupItemViewArgs) {
    }

    onItemLoading(args: ItemEventData) {
        if (args.android) {
            // args.android is instance of ListView
            let lv = args.android;
            lv.setDivider(null);
        }
        if (args.ios) {
            // args.ios is instance of UITableViewCell
            let cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyleNone;
            cell.separatorStyle = UITableViewCellSeparatorStyleNone;
            cell.separatorInset = UIEdgeInsetsZero;
        }
    }

}