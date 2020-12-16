import { IconDefinition, faFolderOpen, faExternalLinkSquareAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { PortfolioCard } from './portfolio-card.model';

@Component({
    selector: 'blumen-portfolio-card',
    templateUrl: './portfolio-card.component.html',
    styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

    icon: IconDefinition = faFolderOpen;
    externalLink: IconDefinition = faExternalLinkSquareAlt;

    portfolioItems: PortfolioCard[] = [
        { icon: faAngular, text: 'Meu Currículo (Web)', link: 'https://github.com/brunoblumenschein/curriculum' },
        {
            icon: faFilePdf,
            text: 'Meu Currículo (Adobe Illustrator)',
            link: 'https://github.com/brunoblumenschein/curriculum/blob/master/src/assets/curriculum/Curriculum%20Vitae%20-%20Bruno%20Blumenschein.ai'
        },
    ];

    constructor() { }

    ngOnInit() {
    }

    openLink(link: string) {
        window.open(link, '_blank');
    }

}
