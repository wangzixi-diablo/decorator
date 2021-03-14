import {Component, Inject, InjectionToken, Injector} from '@angular/core';
import {HostComponentService} from './host-component.service';
import {TOKEN_HOST_CLASS_PROVIDER} from '../parameter-decorator-constant';
import {HostTokenComponentService} from './host-token-component.service';
class MyService {
  constructor() {
    console.log('MyService ctr called');
  }
}

const MY_SERVICE_TOKEN = new InjectionToken<MyService>('Manually constructed MyService', {
  providedIn: 'root',
  factory: () => {
    console.log('MyService factory called');
    return new MyService();
  }
});

@Component({
  selector: 'app-host-decorator',
  template: `
    <h3>@Host -- 获取宿主元素注入器里面注入的对象</h3>
    <div>wrapper
    <ng-content></ng-content>
    </div>
  `,
  providers: [
    HostComponentService,
    {provide: TOKEN_HOST_CLASS_PROVIDER, useClass: HostTokenComponentService}
    /*
    { provide: HostTokenComponentService, useClass: HostTokenComponentService}*/
    /*
    HostTokenComponentService: also ok
    */
  ]
})
export class HostDecoratorComponent {
  constructor(private injectorJerry: Injector, private hostComponentService: HostComponentService, @Inject(TOKEN_HOST_CLASS_PROVIDER) h) {
    console.log('in HostDecoratorComponent, Host component service got from own Injector: ',
    hostComponentService, ' HostTokenComponentService: ', h);
    h.print();

    const BASE_URL = new InjectionToken<string>('只是描述');
    const injector =
    Injector.create({providers: [{provide: BASE_URL, useValue: 'http://localhost'}]});
    const url = injector.get(BASE_URL);
    console.log(url);

    const instance = injectorJerry.get(MY_SERVICE_TOKEN);
    console.log('MY SERVICE TOKEN: ', instance);
  }

  /*
  constructor(private hostComponentService: HostComponentService){
    console.log('in HostDecoratorComponent, Host component service got from own Injector: ', hostComponentService);
  }*/
}
