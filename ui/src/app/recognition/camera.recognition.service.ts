import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ImageAsset} from "tns-core-modules/image-asset";

@Injectable()
export class CameraRecognitionService {
    /**
     * The subject to feed camera data into
     */
    cameraFeed = new BehaviorSubject<ImageAsset>(null);

    /**
     * The observable for data passed into the cameraFeed
     */
    cameraObservable = this.cameraFeed.asObservable();

    constructor() {

    }
}
