import { HobbyCard } from '../card/hobby-card/hobby-card.model';
import { TimelineCard } from '../card/timeline-card/timeline-card.model';
import { Component, OnInit } from '@angular/core';
import {
    faGraduationCap,
    faBriefcase,
    faCertificate,
    faGlasses,
    faPlane,
    faFutbol,
    faGamepad,
    faSwimmer,
    faWater,
    faHiking
} from '@fortawesome/free-solid-svg-icons';
import { FloatingActionButton } from 'ng2-floating-action-menu';

@Component({
    selector: 'blumen-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

    config;

    buttons: Array<FloatingActionButton> = [
        {
            iconClass: 'fa fa-file-image material-red',
            label: 'PNG',
            onClick: () => console.log('1')
        },
        {
            iconClass: 'fa fa-file-pdf material-red',
            label: 'PDF',
            onClick: () => console.log('1')
        },
        {
            iconClass: 'fa fa-file-code material-red',
            label: 'HTML',
            onClick: () => console.log('1')
        },
    ];

    constructor() {
        this.config = {
            placement: 'br',
            effect: 'mfb-slidein-spring',
            label: 'Exportar',
            iconClass: 'fa fa-download material-red',
            activeIconClass: 'fa fa-download material-red',
            toggle: 'hover',
            buttons: this.buttons
        };
    }

    cards: TimelineCard[] = [
        {
            title: 'Formação', icon: faGraduationCap, contents: [
                {
                    location: 'Universidade Federal de Goiás',
                    initialDate: '2014',
                    endDate: '2016',
                    description: 'Especialização em Desenvolvimento de Aplicações Web com Interfaces Ricas'
                },
                {
                    location: 'Universidade Federal de Goiás',
                    initialDate: '2009',
                    endDate: '2013',
                    description: 'Bacharelado em Engenharia de Software'
                },
            ]
        },

        {
            title: 'Experiência Profissional', icon: faBriefcase, contents: [
                {
                    location: 'Megasoft',
                    locationDescription: 'Líder da Equipe de Desenvolvimento',
                    initialDate: '2020',
                    endDate: 'Atualmente',
                    description: `Responsável pela contratação, acompanhamento e mentoria de toda a equipe de desenvolvimento.
                    Participação direta no planejamento e distribuição de tarefas da equipe e evolução do processo de desenvolvimento.
                    Principal responsável por automações entre sistemas e pela evolução e criação de novos produtos, bem como realizar o 
                    integração com a equipe de infraestrutura (DevOps).`
                },
                {
                    location: 'Megasoft',
                    locationDescription: 'Arquiteto de Software',
                    initialDate: '2017',
                    endDate: 'Atualmente',
                    description: `Responsável pela integração de sistemas, criação de modelos e componentes reusáveis,
                     acompanhamento de desempenho e manutenção de rotinas críticas. Liderança de equipe. Foco em Jenkins,
                      Sonar e Redmine; Java 8+, Spring, Hibernate, Angular JS, Angular 2+ e Postgres. Atuando ainda nos sistemas
                       de Contabilidade, Arrecadação, Gestão de Compras, Recursos Humanos e Nota Fiscal Eletrônica. Forte presença
                       na definição de modelos, documentação (casos de uso) e requisitos.`
                },
                {
                    location: 'Megasoft',
                    locationDescription: 'Programador Sênior',
                    initialDate: '2016',
                    endDate: '2017',
                    description: `Desenvolvimento e manutenção de sistemas de contabilidade, arrecadação, gestão de compras e
                     recursos humanos para municípios de Goiás e Tocantins. Foco em Java 8, Angular JS, Postgres e Git.`
                },
                {
                    location: 'Megasoft',
                    locationDescription: 'Programador Java II',
                    initialDate: '2015',
                    endDate: '2016',
                    description: `Manutenção de softwares em JSF com Primefaces, MySQL e Firebird. Sistemas para prefeituras
                     de Goiás e Tocantins. Nota fiscal eletrônica, portais de arrecadação e portais de transparência.`
                },
                {
                    location: 'Grupo Jorlan',
                    locationDescription: 'Desenvolvedor Web',
                    initialDate: '2013',
                    endDate: '2015',
                    description: `Desenvolvimento de soluções completas de intranet e sistemas de controle para todas as 21
                     empresas do grupo, utilizando PHP e Oracle. Participação ativa na integração de sistemas com FPW, NBS e
                      APOLLO. Responsável pela manutenção de 9 sites do grupo.`
                },
            ]
        },

        {
            title: 'Certificados', icon: faCertificate, contents: [
                {
                    location: 'Oracle',
                    initialDate: 'Junho 2018',
                    description: 'Oracle Certified Associate, Java SE 8 Programmer'
                },
            ]
        },

        {
            title: 'Cursos', icon: faGlasses, contents: [
                {
                    location: 'Cod3r (Udemy)',
                    initialDate: '2020',
                    description: 'Aprenda Flutter e Desenvolva Apps para Android e IOS (55 horas)'
                },
                {
                    location: 'Imageria Criativa',
                    initialDate: '2014',
                    description: 'Design Gráfico (Illustrator, Photoshop, InDesign) (40 horas)'
                },
                {
                    location: 'Caelum',
                    initialDate: '2014',
                    description: 'Arquitetura e Design de Projetos Java (40 horas)'
                },
                {
                    location: 'Udacity - Google',
                    initialDate: '2014',
                    description: 'Developing Android Apps & How to Use a Content Provider (Online)'
                },
                {
                    location: 'Zero Glosa',
                    initialDate: '2014',
                    description: 'MVC, Java e Groovy (25 horas)'
                },
                {
                    location: 'Globalcode',
                    initialDate: '2014',
                    description: 'Computação Física com Arduino (10 horas)'
                },
                {
                    location: 'Sistemas Abertos',
                    initialDate: '2014',
                    description: 'Orientação a Objetos com Java (40 horas)'
                },
                {
                    location: 'Sistemas Abertos',
                    initialDate: '2014',
                    description: 'Java Essencial (40 horas)'
                },
                {
                    location: 'BRASAS',
                    initialDate: '2004',
                    endDate: '2006',
                    description: 'Curso de Inglês (300 horas)'
                }
            ]
        },
    ];

    hobbyCard: HobbyCard = {
        itens: [
            { title: 'Viagem', icon: faPlane },
            { title: 'Futebol', icon: faFutbol },
            { title: 'Trilha', icon: faHiking },
            { title: 'Natação', icon: faSwimmer },
            { title: 'Cachoeira', icon: faWater },
            { title: 'Jogos', icon: faGamepad }
        ]
    };

    ngOnInit() { }

}
