import {Injectable} from '@angular/core';

@Injectable()
export class HostComponentService {

  constructor() {
    console.log('Hello, I am HostComponentService:', this);
  }
}
