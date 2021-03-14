import {Directive, Host, Inject} from '@angular/core';
import {HostComponentService} from './host-component.service';
import {TOKEN_HOST_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {HostTokenComponentService} from './host-token-component.service';

@Directive({
  selector: '[appHostDecorator]'
})
export class HostDecoratorDirective {

  /**
   * @Host() 获取宿主元素里面提供的服务(宿主元素注入器提供的服务)
   * @param componentService
   * @param tokenService
   */
  constructor(@Host() private componentService: HostComponentService,
              @Host() @Inject(TOKEN_HOST_CLASS_PROVIDER) private tokenService: HostTokenComponentService) {
                console.log('in host Decorator directive: ',
                componentService, tokenService);
  }
}
