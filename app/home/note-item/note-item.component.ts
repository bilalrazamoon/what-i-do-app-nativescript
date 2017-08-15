import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "ns-note-item",
    moduleId: module.id,
    styleUrls: ["./note-item.component.css"],
    templateUrl: "./note-item.component.html",
})
export class NoteItemComponent implements OnInit, OnDestroy {
    @Input() note;
    @Output() onPin = new EventEmitter();
    @Output() onUnPin = new EventEmitter();
    @Output() onComplete = new EventEmitter();
    @Output() onRemove = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    togglePin() {
        console.log("togglePin", this.note.pinned);
        if (this.note.pinned) {
            this.onUnPin.emit(this.note);
        } else {
            this.onPin.emit(this.note);
        }
    }

}