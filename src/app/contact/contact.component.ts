import { faSkype, faWhatsapp, faLinkedinIn, IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
    selector: 'blumen-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    whatsappIcon: IconDefinition = faWhatsapp;

    mailIcon: IconDefinition = faEnvelope;

    linkedinIcon: IconDefinition = faLinkedinIn;

    skypeIcon: IconDefinition = faSkype;

    homeIcon: IconDefinition = faHome;

    githubIcon: IconDefinition = faGithub;

}
