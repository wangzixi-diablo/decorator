import {Component, InjectFlags, Injector, Optional} from '@angular/core';
import {OptionalComponentService} from './optional-component.service';
import {TOKEN_OPTIONAL_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {SkipSelfModuleService} from '../skipself/skip-self-module.service';

@Component({
  selector: 'app-optional-decorator',
  template: `
    <h3>@Optional -- 和@Inject类似，唯一的区别果如果没有找到依赖关系,注入器将提供null</h3>
  `
})
export class OptionalDecoratorComponent {


  /**
   * @Optional() private componentService: OptionalComponentService
   * 等价于
   * @Optional(OptionalComponentService) private componentService: OptionalComponentService
   */
  constructor(private injector: Injector,
              @Optional() private componentService: OptionalComponentService) {
    // 因为OptionalComponentService我没有在任何地方提供给注入器，所以componentService应该是null
    if (componentService == null) {
      console.log('没有提供该服务');
    }
    // 如果你的服务需要通过具体的token来获取的时候，用如下的方法．因为　@Optional() ＠Inject(token)　一起使用的时候会报错
    const service: SkipSelfModuleService = injector.get(TOKEN_OPTIONAL_CLASS_PROVIDER, null, InjectFlags.Self);
    if (service == null) {
      console.log('没有注入TOKEN_OPTIONAL_CLASS_PROVIDER对应的服务');
    }
  }

}
