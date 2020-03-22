import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})

export class HeaderComponent {
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
}
