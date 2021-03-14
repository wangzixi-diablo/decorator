import {Component, Inject, OnInit, SkipSelf} from '@angular/core';
import {TOKEN_SKIP_SELF_CLASS_PROVIDER} from "../parameter-decorator-constant";
import {SkipSelfModuleService} from "./skip-self-module.service";
import {SkipSelfComponentService} from "./skip-self-component.service";

@Component({
  selector: 'app-skip-self-decorator-child',
  template: `
  `,
})
export class SkipSelfDecoratorChildComponent implements OnInit {

  constructor(@SkipSelf() @Inject(TOKEN_SKIP_SELF_CLASS_PROVIDER) private tokenModuleService: SkipSelfModuleService,
              @SkipSelf() private parentComponentService: SkipSelfComponentService) {
  }

  ngOnInit() {
  }

}
