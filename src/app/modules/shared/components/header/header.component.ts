import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})

export class HeaderComponent {
  filter: string = 'Фильтр';
  isBs3 = isBs3();

  kategories = [
    'kategory1',
    'kategory2',
    'kategory3',
    'kategory4',
    'kategory5',
    'kategory6'
  ];

  additional = [
    'О нас',
    'Ваша аптека',
    'Консультация'
  ];

  filters = [
    'filter1',
    'filter2',
    'filter3',
    'filter4',
    'filter5',
    'filter6',
    'filter7'
  ];


  setTitle(filter: string) {
    console.log(1);
    this.filter = filter;
  }
}
