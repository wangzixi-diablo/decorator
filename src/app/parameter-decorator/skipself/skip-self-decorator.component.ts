import {Component, Inject, Injector, SkipSelf} from '@angular/core';
import {SkipSelfComponentService} from './skip-self-component.service';
import {SkipSelfModuleService} from './skip-self-module.service';
import {TOKEN_SKIP_SELF_CLASS_PROVIDER} from '../parameter-decorator-constant';

@Component({
  selector: 'app-skip-self-decorator',
  template: `
    <h3>@SkipSelf -- </h3>
    <app-skip-self-decorator-child></app-skip-self-decorator-child>
  `,
  providers: [SkipSelfComponentService]
})
export class SkipSelfDecoratorComponent {

  constructor(@SkipSelf() @Inject(TOKEN_SKIP_SELF_CLASS_PROVIDER) componentService: SkipSelfModuleService,
              private injector: Injector) {

  }

}
