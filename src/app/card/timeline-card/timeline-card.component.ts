import { TimelineCard } from './timeline-card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blumen-timeline-card',
    templateUrl: './timeline-card.component.html',
    styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {

    @Input()
    card: TimelineCard;

    constructor() { }

    ngOnInit() { }

}
