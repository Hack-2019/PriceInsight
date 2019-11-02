import { NgModule,NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,AppRoutingModule
      ],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
