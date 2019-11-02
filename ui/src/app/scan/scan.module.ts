import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { scanRoutingModule } from "./scan-routing.module";
import { scan } from "./scan.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        scanRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        scan
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class scanScreenRoutingModule { }