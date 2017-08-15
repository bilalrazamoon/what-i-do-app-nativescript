import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routes";
import { AuthGuard, UnAuthGuard } from "./app.guards";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { NoteCreateComponent } from "./home/note-create/note-create.component";
import { NoteListComponent } from "./home/note-list/note-list.component";
import { NoteItemComponent } from "./home/note-item/note-item.component";

import { registerElement } from 'nativescript-angular/element-registry';
registerElement("CardView", () => require("nativescript-cardview").CardView);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        NoteCreateComponent,
        NoteListComponent,
        NoteItemComponent
    ],
    providers: [
        AuthGuard,
        UnAuthGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
