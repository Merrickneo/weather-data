import { Component, Input } from '@angular/core';
import { NbListItemComponent } from '@nebular/theme';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent extends NbListItemComponent {
    @Input() route: string = '';
    constructor() {
        super();
    }
}
