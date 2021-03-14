import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParameterDecoratorComponent} from './parameter-decorator.component';

/**
 * 路由配置信息: 该routing module里，默认显示DecoratorComponent
 */
const routes: Routes = [
  {
    path: '',
    component: ParameterDecoratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ParameterDecoratorRoutingModule { }
