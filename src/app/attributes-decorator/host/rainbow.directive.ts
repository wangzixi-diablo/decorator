import {Directive, HostBinding, HostListener} from '@angular/core';

/**
 * 主要是说明@HostBinding、@HostListener使用
 */
@Directive({
  selector: '[appRainbow]',
  exportAs: 'appRainbow'
})
export class RainbowDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  // 为宿主元素添加属性值
  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') borderColor: string;

  // 为宿主元素添加事件
  @HostListener('keydown') onKeydown() {
    // 随机去一个颜色
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}
