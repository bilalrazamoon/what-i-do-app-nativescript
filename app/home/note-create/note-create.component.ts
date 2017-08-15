import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../app.service";

@Component({
    selector: "ns-note-create",
    moduleId: module.id,
    styleUrls: ["./note-create.component.css"],
    templateUrl: "./note-create.component.html",
})
export class NoteCreateComponent implements OnInit, OnDestroy {
    @Output() value: string;
    @Output() onDone = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    onEnter() {
        if (this.value) {
            const uid = AuthService.uid;
            this.onDone.emit({
                created_at: Date.now(),
                created_by: uid || '',
                pinned: false,
                text: this.value || ''
            });
            this.value = '';
        }
    }

}