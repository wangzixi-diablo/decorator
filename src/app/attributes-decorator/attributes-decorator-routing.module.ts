import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AttributesDecoratorComponent} from './attributes-decorator.component';

/**
 * 路由配置信息
 */
const routes: Routes = [
  {
    path: "",
    component: AttributesDecoratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AttributesDecoratorRoutingModule {
}
