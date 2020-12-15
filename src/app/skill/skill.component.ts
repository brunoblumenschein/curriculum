import { Skill } from './skill.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blumen-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

    @Input()
    skill: Skill;

    constructor() { }

    ngOnInit() {
    }

}
