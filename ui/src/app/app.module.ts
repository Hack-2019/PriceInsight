import { NgModule} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,
      ],
      declarations: [AppComponent],
      bootstrap: [AppComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
