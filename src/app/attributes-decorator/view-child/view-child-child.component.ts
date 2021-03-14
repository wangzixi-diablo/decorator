import {Component} from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  template: '<p>{{name}}</p><div><input value="xixi"></div>'
})
export class ViewChildChildComponent {

  public name = 'childName';

  callFunction(name: string) {
    console.log('hello ' + name);
  }

}
