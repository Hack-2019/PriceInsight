import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LandRoutingModule } from "./landingScreen-routing.module";
import { landingScreen } from "./landingScreen.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LandRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        landingScreen
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class landingScreenModule { }
