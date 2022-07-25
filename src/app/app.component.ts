import { Component, ViewEncapsulation } from '@angular/core';

import { LuigiContextService } from '@luigi-project/client-support-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(service: LuigiContextService) {
    service.contextObservable().subscribe(data => {
      console.log('data', data);
    });
  }
}
