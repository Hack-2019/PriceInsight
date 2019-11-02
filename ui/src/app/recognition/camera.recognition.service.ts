import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ImageAsset} from "tns-core-modules/image-asset";
import {GoogleRecognitionService} from "~/app/recognition/google.recognition.service";

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

    constructor(private googleRecognitionService: GoogleRecognitionService) {
        this.cameraObservable.subscribe((next) => {
            googleRecognitionService.process(next);
        });
    }
}
