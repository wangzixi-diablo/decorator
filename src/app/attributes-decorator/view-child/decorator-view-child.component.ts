import {Component, ElementRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import {ViewChildChildComponent} from './view-child-child.component';

@Component({
  selector: 'app-decorator-view-child',
  template: `
    <h3>@ViewChild,@ViewChildren(从模板视图中获取匹配的元素)</h3>
    <app-view-child-child #childA></app-view-child-child>
    <app-view-child-child #childB></app-view-child-child>
    <button (click)="clickMe()" >点我</button>

  `
})
export class DecoratorViewChildComponent {

  /**
   * @ViewChild 的使用
   */
    // 使用模板变量名
  @ViewChild('childA')
  child10;
  // 使用类型查询
  @ViewChild(ViewChildChildComponent)
  child11;
  // 使用模板变量名及设置查询条件
  @ViewChild('childB', {read: ElementRef})
  child20;
  @ViewChild('childB', {read: ViewContainerRef})
  child21;

  /**
   * @ViewChildren 的使用
   */
  @ViewChildren(ViewChildChildComponent)
  children;

  clickMe() {
    this.child10.callFunction('child10');
    this.child11.name = '我是child2';

    this.child20.nativeElement.lastElementChild.firstElementChild.value = '我是child3~';
    this.child21._data.componentView.component.callFunction('child21');

    this.children._results[0].callFunction('children');
  }

}
