import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <mat-button-toggle-group #group="matButtonToggleGroup">
  <mat-button-toggle value="left">
     <a routerLink="/">Home</a>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <a routerLink="/lazy">Lazy</a>
  </mat-button-toggle>
  <mat-button-toggle value="right">
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  </mat-button-toggle> 
</mat-button-toggle-group>
<router-outlet></router-outlet> 
  `,
  styles: []
})
export class AppComponent {

}
