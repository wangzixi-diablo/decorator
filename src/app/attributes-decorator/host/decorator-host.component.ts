import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-decorator-host',
  template: `
    <h3>@HostBinding(为宿主元素添加属性值)</h3>
    <h3>@HostListener(为宿主元素添加事件)</h3>
    <input appRainbow>
  `
})
export class DecoratorHostComponent {


}
