import { Component, OnInit } from "@angular/core";
import * as camera from "nativescript-camera"
import {ImageAsset} from "tns-core-modules/image-asset";
import {CameraRecognitionService} from "~/app/recognition/camera.recognition.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private cameraRecognitionService: CameraRecognitionService) { }

    ngOnInit() {
        console.log("test");
        camera.requestPermissions().then(() => {
             camera.takePicture().then((asset: ImageAsset) => {
                    console.log("picture fsd sfd received");
                    this.cameraRecognitionService.cameraFeed.next(asset);
                 }
             )
        });
    }
}

