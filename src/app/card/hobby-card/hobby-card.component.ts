import { IconDefinition, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { HobbyCard } from './hobby-card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blumen-hobby-card',
    templateUrl: './hobby-card.component.html',
    styleUrls: ['./hobby-card.component.scss']
})
export class HobbyCardComponent implements OnInit {

    @Input()
    hobbyCard: HobbyCard;

    icon: IconDefinition = faHeartbeat;

    constructor() { }

    ngOnInit() { }

}
