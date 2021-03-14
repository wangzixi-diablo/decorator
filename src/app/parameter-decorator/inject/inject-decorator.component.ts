import {Component, Inject} from '@angular/core';
import {InjectComponentService} from './inject-component.service';
import {TOKEN_INJECT_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {InjectModuleService} from './inject-module.service';

@Component({
  selector: 'app-inject-decorator',
  template: `
    <h3>@Inject -- 获取注入器里面指定token对应的服务实例对象</h3>
  `,
  providers: [InjectComponentService]
})
export class InjectDecoratorComponent {

  /**
   * private injectService: InjectComponentService 可认为是 @Inject(InjectComponentService) private injectService: InjectComponentService
   */
  constructor(private injectService: InjectComponentService,
              @Inject(TOKEN_INJECT_CLASS_PROVIDER) private moduleService: InjectModuleService) {
    // 构造函数里面，我们仅仅只是拿到了两个服务对象，其他啥事都没干
    console.log(' Inject Service: ', injectService,
    'InjectModuleService: ', moduleService);
  }
}
