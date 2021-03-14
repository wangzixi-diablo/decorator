import {InjectionToken} from '@angular/core';
import {InjectModuleService} from './inject/inject-module.service';
import {SkipSelfModuleService} from './skipself/skip-self-module.service';
import {SelfTokenComponentService} from "./self/self-token-component.service";
import {HostTokenComponentService} from "./host/host-token-component.service";

export const TOKEN_INJECT_CLASS_PROVIDER = new InjectionToken<InjectModuleService>('TOKEN_INJECT_CLASS_PROVIDER');

// @Optional
export const TOKEN_OPTIONAL_CLASS_PROVIDER = new InjectionToken<SkipSelfModuleService>('TOKEN_OPTIONAL_CLASS_PROVIDER');


// @Self
export const TOKEN_SKIP_CLASS_PROVIDER = new InjectionToken<SelfTokenComponentService>('TOKEN_SKIP_CLASS_PROVIDER');

// @SkipSelf
export const TOKEN_SKIP_SELF_CLASS_PROVIDER = new InjectionToken<SkipSelfModuleService>('TOKEN_SKIP_SELF_CLASS_PROVIDER');

// @Host
export const TOKEN_HOST_CLASS_PROVIDER = new InjectionToken<HostTokenComponentService>('TOKEN_HOST_CLASS_PROVIDER');

