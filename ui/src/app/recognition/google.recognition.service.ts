import {Injectable} from "@angular/core";
import {ImageAsset} from "tns-core-modules/image-asset";
import {fromAsset} from 'tns-core-modules/image-source'
import {knownFolders, path} from "tns-core-modules/file-system";

@Injectable()
export class GoogleRecognitionService {
    private vision: any;
    private client: any;

    constructor() {
        this.vision = require('@google-cloud/vision');
        this.client = this.vision.ImageAnnotatorClient();
    }

    process(image: ImageAsset): void {
        fromAsset(image).then(source => {
            const tempFolder = knownFolders.temp();
            const tempFile = path.join(tempFolder.path, "grec", ".png");
            if (source.saveToFile(tempFile, "png", 90)) {
                this.callGoogleVision(tempFile)
            }
        });
    }

    private callGoogleVision(tempFile: string) {
        const request: TextDetectionRequest = {
            source: {
                filename: tempFile
            }
        };

        this.client.textDetection(request)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
               console.log(err);
            });
    }
}

interface TextDetectionRequest {
    source: {
        filename: string;
    };
}
