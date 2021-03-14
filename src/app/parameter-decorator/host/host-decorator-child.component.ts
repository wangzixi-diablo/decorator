import {Component, Host, Inject} from '@angular/core';
import {HostComponentService} from './host-component.service';
import {TOKEN_HOST_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {HostTokenComponentService} from './host-token-component.service';

@Component({
  selector: 'app-host-decorator-child',
  template: `
    <p>child Component里，ng-content对应的内容</p>
  `
})
export class HostDecoratorChildComponent {

  constructor(@Host() private componentService: HostComponentService,
  @Host() @Inject(TOKEN_HOST_CLASS_PROVIDER) private tokenService: HostTokenComponentService) {
    console.log('in HostDecoratorChildComponent, Host component service got from Host Injector: ',
    componentService, ' HostTokenComponentService: ', tokenService);
  }
}
