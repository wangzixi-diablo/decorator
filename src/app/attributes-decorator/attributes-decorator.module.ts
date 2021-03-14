import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributesDecoratorRoutingModule} from './attributes-decorator-routing.module';
import {AttributesDecoratorComponent} from './attributes-decorator.component';
import { DecoratorInputComponent } from './input/decorator-input.component';
import { DecoratorOutputComponent } from './output/decorator-output.component';
import { DecoratorHostComponent } from './host/decorator-host.component';
import { RainbowDirective } from './host/rainbow.directive';
import { DecoratorContentChildComponent } from './content-child/decorator-content-child.component';
import { DecoratorViewChildComponent } from './view-child/decorator-view-child.component';
import { ViewChildChildComponent } from './view-child/view-child-child.component';
import { ContentParentComponent } from './content-child/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';

@NgModule({
  declarations: [
    AttributesDecoratorComponent,
    DecoratorInputComponent,
    DecoratorOutputComponent,
    DecoratorHostComponent,
    RainbowDirective,
    DecoratorContentChildComponent,
    DecoratorViewChildComponent,
    ViewChildChildComponent,
    ContentParentComponent,
    ContentChildComponent
  ],
  imports: [
    CommonModule,
    AttributesDecoratorRoutingModule
  ]
})
export class AttributesDecoratorModule {
}
