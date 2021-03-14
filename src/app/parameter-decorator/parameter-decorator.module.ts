import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParameterDecoratorComponent} from './parameter-decorator.component';
import {InjectDecoratorComponent} from './inject/inject-decorator.component';
import {OptionalDecoratorComponent} from './optional/optional-decorator.component';
import {SelfDecoratorComponent} from './self/self-decorator.component';
import {SkipSelfDecoratorComponent} from './skipself/skip-self-decorator.component';
import {HostDecoratorComponent} from './host/host-decorator.component';
import {ParameterDecoratorRoutingModule} from './parameter-decorator-routing.module';
import {TOKEN_INJECT_CLASS_PROVIDER, TOKEN_SKIP_SELF_CLASS_PROVIDER} from './parameter-decorator-constant';
import {InjectModuleService} from './inject/inject-module.service';
import {SelfModuleService} from './self/self-module.service';
import {SkipSelfDecoratorChildComponent} from './skipself/skip-self-decorator-child.component';
import {SkipSelfModuleService} from './skipself/skip-self-module.service';
import {HostModuleService} from './host/host-module.service';
import {HostDecoratorDirective} from './host/host-decorator.directive';
import {HostDecoratorChildComponent} from './host/host-decorator-child.component';

@NgModule({
  declarations: [
    ParameterDecoratorComponent,
    InjectDecoratorComponent,
    OptionalDecoratorComponent,
    SelfDecoratorComponent,
    SkipSelfDecoratorComponent,
    SkipSelfDecoratorChildComponent,
    HostDecoratorComponent,
    HostDecoratorChildComponent,
    HostDecoratorDirective
  ],
  imports: [
    CommonModule,
    ParameterDecoratorRoutingModule
  ],
  providers: [
    {provide: TOKEN_INJECT_CLASS_PROVIDER, useClass: InjectModuleService},
    SelfModuleService, // 等价于 {provide: SelfModuleService, useClass: SelfModuleService}
    {provide: TOKEN_SKIP_SELF_CLASS_PROVIDER, useClass: SkipSelfModuleService},
    HostModuleService
  ]
})
export class ParameterDecoratorModule {
}
