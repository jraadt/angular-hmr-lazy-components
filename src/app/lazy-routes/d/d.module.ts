import { NgModule, NgModuleRef, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { DComponent } from "./d.component";
import { HmrModuleHelper } from "../../hmr-module-helper";
import { D2Component } from "./d2.component";

const routes: Routes = [
  { path: "d1", component: DComponent },
  { path: "d2", component: D2Component }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [CommonModule, routing],
  declarations: [DComponent, D2Component],
  entryComponents: [DComponent, D2Component]
})
export class DModule {
  constructor(moduleRef: NgModuleRef<DModule>) {
    HmrModuleHelper.enableHmrRouterNgModule(module, moduleRef);
  }
}

HmrModuleHelper.enableHmrNodeModule(module);
