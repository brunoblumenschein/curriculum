import { TimelineCardContent } from './timeline-card-content.model';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface TimelineCard {

    title: string;
    icon: IconDefinition;
    contents: TimelineCardContent[];

}
