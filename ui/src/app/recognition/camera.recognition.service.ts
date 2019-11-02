import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ImageSource} from "tns-core-modules/image-source";

@Injectable()
export class CameraRecognitionService {
    /**
     * The subject to feed camera data into
     */
    cameraFeed = new BehaviorSubject<ImageSource>(null);

    /**
     * The observable for data passed into the cameraFeed
     */
    cameraObservable = this.cameraFeed.asObservable();

    constructor() {

    }
}
