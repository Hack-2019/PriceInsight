import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "scan",
    moduleId: module.id,
    templateUrl: "./scan.component.html"
})
export class scan implements OnInit {

    constructor(private _routerExtensions: RouterExtensions,) {
    }

    ngOnInit(): void {
    }
}