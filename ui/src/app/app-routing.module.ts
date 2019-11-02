import { Component, NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { scan } from "./scan/scan.component";

const routes: Routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", loadChildren: () => import("./landingScreen/landingScreen.module").then(m => m.landingScreenModule) },
    { path: "scan", loadChildren: () => import("./scan/scan.module").then(m => m.scanScreenRoutingModule)}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
