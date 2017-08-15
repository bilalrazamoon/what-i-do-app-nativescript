// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { AuthService } from "./app.service";

import firebase = require("nativescript-plugin-firebase");

firebase.init({
    //persist should be set to false as otherwise numbers aren't returned during livesync
    persist: false,
    storageBucket: '',
    onAuthStateChanged: (data: any) => {
        console.log("firebase:onAuthStateChanged", JSON.stringify(data));
        if (data.loggedIn) {
            AuthService.uid = data.user.uid;
        }
        else {
            AuthService.uid = "";
        }
    }
}).then(instance => {
    console.log("firebase.init done");
}, error => {
    console.log("firebase.init error: " + error);
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
