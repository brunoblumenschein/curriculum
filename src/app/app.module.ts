import { HobbyCardComponent } from './card/hobby-card/hobby-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PanelComponent } from './panel/panel.component';
import { PrincipalComponent } from './principal/principal.component';
import { TimelineCardComponent } from './card/timeline-card/timeline-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SkillComponent } from './skill/skill.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { InterestComponent } from './interest/interest.component';
import { PhotoComponent } from './photo/photo.component';
import { PortfolioCardComponent } from './card/portfolio-card/portfolio-card.component';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';

@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        PanelComponent,
        PrincipalComponent,
        TimelineCardComponent,
        HobbyCardComponent,
        ProgressBarComponent,
        SkillComponent,
        SectionTitleComponent,
        ContactComponent,
        AboutComponent,
        CapabilitiesComponent,
        InterestComponent,
        PhotoComponent,
        PortfolioCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FloatingActionMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
