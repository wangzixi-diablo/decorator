import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.less']
})
export class ContentChildComponent implements OnInit {

  initValue = 'content child';

  constructor() {
  }

  ngOnInit() {
  }

}
