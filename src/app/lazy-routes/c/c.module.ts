import { NgModule, NgModuleRef, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CComponent } from './c.component';
import { HmrModuleHelper } from '../../hmr-module-helper';
import { C2Component } from './c2.component';

const routes: Routes = [
  { path: "c1", component: CComponent },
  { path: "c2", component: C2Component }
]
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [CommonModule, routing],
  declarations: [CComponent, C2Component],
  entryComponents: [CComponent, C2Component]
})
export class CModule {
  constructor(moduleRef: NgModuleRef<CModule>) {
    HmrModuleHelper.enableHmrRouterNgModule(module, moduleRef);
  }
}

HmrModuleHelper.enableHmrNodeModule(module);
