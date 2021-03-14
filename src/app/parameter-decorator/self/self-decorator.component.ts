import {Component, Inject, Injector, Self} from '@angular/core';
import {SelfComponentService} from './self-component.service';
import {TOKEN_SKIP_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {SelfTokenComponentService} from './self-token-component.service';

@Component({
  selector: 'app-self-decorator',
  template: `
    <h3>@Self -- 获取当前组件(或者指令)注入器里面注入的对象(NgModule里面注入的都不行)</h3>
  `,
  providers: [
    SelfComponentService,
    {provide: TOKEN_SKIP_CLASS_PROVIDER, useClass: SelfTokenComponentService}
  ]
})
export class SelfDecoratorComponent {

  /**
   * @Self()只能获取当前组件注入器中注入的服务，NgModule 注入器里面注入的都不行
   */
  constructor(private injector: Injector,
              @Self() private componentService: SelfComponentService,
              @Self() @Inject(TOKEN_SKIP_CLASS_PROVIDER) private tokenComponentService: SelfTokenComponentService) {

    // // injector.get(SelfModuleService, null, InjectFlags.Self)这种写法好像有点问题，讲道理是获取不到服务的
    // const service: SelfModuleService = injector.get(SelfModuleService, null, InjectFlags.Self);

  }

}
