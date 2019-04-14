import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { DynamicComponentsService } from "./dynamic-components.service";

export const appRoutes: Routes = [
  { path: "c", loadChildren: "src/app/lazy-routes/c/c.module#CModule" },
  { path: "d", loadChildren: "src/app/lazy-routes/d/d.module#DModule" }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [
    //the followiung is needed if you aren't importing the RouterModule
    //{provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
    DynamicComponentsService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
