import { Interest } from './interest.model';
import { Component } from '@angular/core';

@Component({
    selector: 'blumen-interest',
    templateUrl: './interest.component.html',
    styleUrls: ['./interest.component.scss']
})
export class InterestComponent {

    items: Interest[] = [
        { title: 'DevOps' },
        { title: 'Docker' },
        { title: 'Kubernetes' },
        { title: 'Microserviços' },
        { title: 'Testes' },
        { title: 'Testes JS' },
        { title: 'Raspberry Pi' },
        { title: 'SASS' },
        { title: 'Mestrado' },
        { title: 'Java OCP' },
    ];

}
