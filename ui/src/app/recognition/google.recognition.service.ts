import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ImageAsset} from "tns-core-modules/image-asset";
import {fromAsset} from 'tns-core-modules/image-source'
import credentials from "~/res/credentials";

@Injectable()
export class GoogleRecognitionService {
    readonly VISION_URL = "https://vision.googleapis.com/v1/images:annotate";

    constructor(private http: HttpClient) { }

    process(image: ImageAsset): void {
        // sfj
        fromAsset(image).then(source => {
            console.log("testing: " + image.android == null);
            const request: VisionRequestBody = {
                // test
                requests: [
                    {
                        // Android and IOS are the only supported platforms
                        image: {
                            content: source.toBase64String("png")
                        },
                        features: [
                            {
                                type: "TEXT_DETECTION"
                            }
                        ],
                        imageContext: undefined
                    }
                ]
            };

            const params: HttpParams = new HttpParams()
                .append("key", credentials.googleVisionKey);

            this.http.post(this.VISION_URL, request, {params: params}).subscribe(response => {
                console.log(response)
            });
        });
    }
}

interface VisionRequestBody {
    requests: AnnotateImageRequest[];
}

interface AnnotateImageRequest {
    image: VisionRequestImage;
    features: VisionRequestFeature[];
    imageContext: any | undefined;
}

interface VisionRequestFeature {
    type: string;
}

interface VisionRequestImage {
    content: string;
}
