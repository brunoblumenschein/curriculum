import { Skill } from './../skill/skill.model';
import { Component } from '@angular/core';

@Component({
    selector: 'blumen-capabilities',
    templateUrl: './capabilities.component.html',
    styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {

    language: Skill = {
        title: 'Linguagens',
        bars: [
            { text: 'Java 8+', percentage: 93 },
            { text: 'HTML', percentage: 90 },
            { text: 'Angular JS', percentage: 85 },
            { text: 'Javascript', percentage: 75 },
            { text: 'Typescript (Angular 2+)', percentage: 70 },
            { text: 'Groovy', percentage: 70 },
            { text: 'Android', percentage: 60 },
            { text: 'CSS (SASS)', percentage: 60 },
            { text: 'Dart (Flutter)', percentage: 35 }
        ]
    };

    database: Skill = {
        title: 'Banco de Dados',
        bars: [
            { text: 'PostgreSQL', percentage: 75 },
            { text: 'Oracle PL/SQL', percentage: 65 },
            { text: 'MySQL', percentage: 65 }
        ]
    };

    infra: Skill = {
        title: 'Infraestrutura',
        bars: [
            { text: 'Redmine', percentage: 95 },
            { text: 'Jenkins', percentage: 90 },
            { text: 'Sonar', percentage: 75 },
            { text: 'Linux', percentage: 55 },
            { text: 'Nexus', percentage: 50 }
        ]
    };

    technology: Skill = {
        title: 'Tecnologias',
        bars: [
            { text: 'JPA/Hibernate', percentage: 85 },
            { text: 'Bootstrap', percentage: 85 },
            { text: 'Git', percentage: 80 },
            { text: 'Spring(boot)', percentage: 70 },
            { text: 'Gradle', percentage: 65 },
            { text: 'Hugo', percentage: 60 },
        ]
    };

    other: Skill = {
        title: 'Outros',
        bars: [
            { text: 'Documentação', percentage: 100 },
            { text: 'Adobe Illustrator', percentage: 80 },
            { text: 'Usabilidade/UX', percentage: 80 },
            { text: 'Adobe Photoshop', percentage: 40 }
        ]
    };

}
