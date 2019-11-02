import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData, Page } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button";
import { GestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    selector: "landingScreen",
    moduleId: module.id,
    templateUrl: "./landingScreen.component.html"
})
export class landingScreen implements OnInit {

    constructor(private _routerExtensions: RouterExtensions,) 
    {
    }
    onScan(args: GestureEventData){
        console.log("Here?");
        /*
        this._routerExtensions.navigate(["./scan/scan.componenet.html"],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            })
            */
    }
    ngOnInit(): void {
    }
}
