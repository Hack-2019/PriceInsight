import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Image } from "tns-core-modules/ui/image";
import * as camera from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";

@Component({
    selector: "scan",
    moduleId: module.id,
    templateUrl: "./scan.component.html"
})
export class scan implements OnInit {
    image: ImageAsset;

    constructor(private _routerExtensions: RouterExtensions,) {
    }

    async ngOnInit() {
        camera.requestCameraPermissions()

        this.image = await camera.takePicture();
    }
}