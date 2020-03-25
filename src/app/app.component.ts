import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  isHeaderVisible: boolean;
  private internalSubscriptions: Subscription;

  constructor(
    private readonly router: Router
  ) {
    setTheme('bs4');
    this.internalSubscriptions = this.router.events.subscribe(event => {
      //console.log(event);
    })
  }

  ngOnDestroy(): void {
    this.internalSubscriptions.unsubscribe();
  }

}
