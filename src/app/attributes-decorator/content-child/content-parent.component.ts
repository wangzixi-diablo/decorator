import {AfterContentInit, Component, ContentChild} from '@angular/core';
import {ContentChildComponent} from './content-child.component';

@Component({
  selector: 'app-content-parent',
  template: `
    <p>Parent Component</p>
    <!-- ng-content 让使用该组件的人可以自定义里面的内容 -->
    <ng-content></ng-content>
  `
})
export class ContentParentComponent implements AfterContentInit {

  // 通过类型获取 -- ngAfterContentInit　(事先我们明确了ng-content里面会放置ContentChildComponent组件)
  @ContentChild(ContentChildComponent)
  contentChild: ContentChildComponent;

  constructor() {
  }

  ngAfterContentInit() {
    // 对应contentChild做相应的操作处理
    this.contentChild.initValue = '@ContentChild';
  }

}
