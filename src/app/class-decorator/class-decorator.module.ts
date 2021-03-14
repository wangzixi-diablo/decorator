import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassDecoratorRoutingModule} from './class-decorator-routing.module';
import {ClassDecoratorComponent} from './class-decorator.component';
import { FileSizePipe } from './pipe/file-size.pipe';

@NgModule({
  declarations: [
    ClassDecoratorComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    ClassDecoratorRoutingModule
  ]
})
export class ClassDecoratorModule {
}
