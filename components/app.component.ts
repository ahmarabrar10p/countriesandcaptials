import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashbroad" routerLinkActive="active">Home</a>
      <a routerLink="/countries">Countries</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{
    title: "Countries & Capitals"
}