import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";
import { AuthService, DatabaseService } from "../app.service";
import { Observable, Subscription } from "rxjs";
import { Page } from "ui/page";
import * as dialogs from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";

interface User {
    name: string;
    image: string;
    email: string;
}

interface Note {
    created_at: number;
    created_by: string;
    text: string;
    pinned: string;
    completed: string;
    deleted: string;

    $id?: string
    $ref?: string
}

@Component({
    selector: "ns-home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
    user$: Observable<User>;
    user: User;
    userSubs: Subscription;
    notes$: Observable<Note[]>;
    notes: Note[];
    pinnedNotes: Note[];
    otherNotes: Note[];
    notesSubs: Subscription;

    constructor(private page: Page, private routerExtensions: RouterExtensions, private ngZone: NgZone) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        let uid = AuthService.uid;
        this.user$ = DatabaseService.get(`/users/${uid}`);
        console.log("HomeComponent:uid", uid);
        this.userSubs = this.user$
            .subscribe(data => {
                if (data) {
                    console.log("HomeComponent:user", JSON.stringify(data));
                    this.ngZone.run(() => {
                        this.user = data;
                    });
                }
            });
        this.notes$ = DatabaseService.queryAll('/notes', {
            orderBy: {
                type: DatabaseService.QueryOrderByType.CHILD,
                value: 'created_by'
            },
            range: {
                type: DatabaseService.QueryRangeType.EQUAL_TO,
                value: uid
            },
            limit: {
                type: DatabaseService.QueryLimitType.LAST,
                value: 50
            }
        });
        this.notesSubs = this.notes$
            .subscribe(notes => {
                notes = notes || [];
                console.log("HomeComponent:notes", JSON.stringify(notes));
                this.ngZone.run(() => {
                    this.notes = notes;
                    this.notes = notes.sort((noteA, noteB) => (noteB.created_at - noteA.created_at));
                    this.pinnedNotes = this.notes.filter(note => note.pinned);
                    this.otherNotes = this.notes.filter(note => !note.pinned);
                })
            });
    }

    ngOnDestroy(): void {
        this.userSubs.unsubscribe();
        this.notesSubs.unsubscribe()
    }

    createNote(note: string) {
        DatabaseService.create('/notes', note)
    }

    isPinNotes() {
        return this.pinnedNotes.length > 0;
    }

    pinNote(note: Note) {
        console.log("pinNote", note);
        let noteId = note.$id;
        DatabaseService.update(`notes/${noteId}`, {pinned: true});
    }

    unPinNote(note: Note) {
        console.log("unPinNote", note);
        let noteId = note.$id;
        DatabaseService.update(`notes/${noteId}`, {pinned: false});
    }

    onIndexChange(index) {
        console.log(index);
    }

    onProfile() {
        dialogs.action("Options", "Cancel", ["Logout"])
            .then(result => {
                if (result === "Logout") {
                    this.logout();
                }
                console.log("dialog:result " + result);
            });
    }

    logout() {
        AuthService.logout()
            .then(_ => {
                this.routerExtensions.navigate(['/login'], {clearHistory: true});
            })
    }
}
