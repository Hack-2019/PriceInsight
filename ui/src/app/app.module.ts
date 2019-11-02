import { NgModule,NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {GoogleRecognitionService} from "~/app/recognition/google.recognition.service";
import {CameraRecognitionService} from "~/app/recognition/camera.recognition.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        NativeScriptModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        GoogleRecognitionService,
        CameraRecognitionService
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
