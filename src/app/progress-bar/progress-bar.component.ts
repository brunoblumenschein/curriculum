import { ProgressBar } from './progress-bar.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blumen-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

    @Input()
    progressBar: ProgressBar;

    @Input()
    last: boolean;

    circlePosition: string;

    constructor() { }

    ngOnInit() {
        this.circlePosition = `calc(${this.progressBar.percentage}% - 10px)`;
    }

}
