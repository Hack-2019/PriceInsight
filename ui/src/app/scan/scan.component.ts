import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as camera from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import { CameraRecognitionService } from "~/app/recognition/camera.recognition.service";

@Component({
    selector: "scan",
    moduleId: module.id,
    templateUrl: "./scan.component.html"
})
export class scan {
    image: ImageAsset;

    constructor(private routerExtensions: RouterExtensions, private cameraRecognitionService: CameraRecognitionService) {
    }

    async ngOnInit() {
        await camera.requestCameraPermissions()

        this.image = await camera.takePicture();
        this.cameraRecognitionService.cameraFeed.next(this.image);
    }
}
