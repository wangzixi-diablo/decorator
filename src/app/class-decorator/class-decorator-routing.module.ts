import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassDecoratorComponent} from './class-decorator.component';
import {RouterModule, Routes} from '@angular/router';

/**
 * 路由配置信息
 */
const routes: Routes = [
  {
    path: '',
    component: ClassDecoratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClassDecoratorRoutingModule {
}
