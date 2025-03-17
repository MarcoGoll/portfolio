import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { TranslateService, _ } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  currentLanguage: 'en' | 'de' = 'en';
  currentProjectsArray: Project[] | null = [];
  constructor(private translate: TranslateService) {
    this.currentProjectsArray = this.projectsEN;
  }

  projectsEN: Project[] = [
    {
      id: 'join',
      index: 0,
      projectImg: './assets/images/join.png',
      name: 'Join',
      description:
        'Join is a web-based business application for task management that enables simple and efficient organisation of tasks and contacts.',
      implementationDetails:
        'In this Angular application, tasks and contacts can be created and managed via Firebase after authentication. The tasks can be transferred to different statuses using drag & drop.',
      duration: '5 Weeks',
      techniques: [
        {
          techniqueImg: './assets/images/04_Icons/HTML.svg',
          technique: 'HTML',
        },
        { techniqueImg: './assets/images/04_Icons/css.svg', technique: 'CSS' },
        {
          techniqueImg: './assets/images/04_Icons/ts.svg',
          technique: 'TypeScript',
        },
        {
          techniqueImg: './assets/images/04_Icons/angular.svg',
          technique: 'Angular',
        },
        {
          techniqueImg: './assets/images/04_Icons/firebase.svg',
          technique: 'FireBase',
        },
        {
          techniqueImg: './assets/images/04_Icons/materialDesign.svg',
          technique: 'Material Design',
        },
        {
          techniqueImg: './assets/images/04_Icons/scrum.svg',
          technique: 'Scrum',
        },
      ],
      linkGitHub: 'https://github.com/MarcoGoll',
      linkLive: 'https://join.marcogollmer.de',
      featuredProject: true,
    },
    {
      id: 'sharkie',
      index: 1,
      projectImg: './assets/images/sharkie.png',
      name: 'Sharkie',
      description:
        'Help SHARKIE battle through waves of pufferfish and jellyfish to reach the ultimate showdown with the evil Orca STRESSED WILLY!',
      implementationDetails:
        'This project is a JavaScript-based application focused on Object-Oriented Programming (OOP) principles. It demonstrates how to structure code using classes, inheritance and encapsulation, and to create a modular and scalable application.',
      duration: '4 Weeks',
      techniques: [
        {
          techniqueImg: './assets/images/04_Icons/HTML.svg',
          technique: 'HTML',
        },
        { techniqueImg: './assets/images/04_Icons/css.svg', technique: 'CSS' },
        {
          techniqueImg: './assets/images/04_Icons/js.svg',
          technique: 'JavaScript',
        },
      ],
      linkGitHub: 'https://github.com/MarcoGoll/da_018_sharkie',
      linkLive: 'https://sharkie.marcogollmer.de',
      featuredProject: false,
    },
    {
      id: 'pokedex',
      index: 2,
      projectImg: './assets/images/pokedex.png',
      name: 'Pokedex',
      description:
        'This Pokédex project is a web application that allows users to browse and explore detailed information about Pokémon. Built with JavaScript, HTML, and CSS, it fetches data dynamically and presents it in an interactive and user-friendly interface.',
      implementationDetails:
        'This project focuses on JavaScript and REST API usage, demonstrating how to fetch, process, and display data from external APIs dynamically.',
      duration: '2 Weeks',
      techniques: [
        {
          techniqueImg: './assets/images/04_Icons/HTML.svg',
          technique: 'HTML',
        },
        { techniqueImg: './assets/images/04_Icons/css.svg', technique: 'CSS' },
        {
          techniqueImg: './assets/images/04_Icons/js.svg',
          technique: 'JavaScript',
        },
        {
          techniqueImg: './assets/images/04_Icons/restapi.svg',
          technique: 'REST API',
        },
      ],
      linkGitHub: 'https://github.com/MarcoGoll/da_015_pokedex',
      linkLive: 'https://pokedex.marcogollmer.de',
      featuredProject: false,
    },
  ];

  projectsDE: Project[] = [
    {
      id: 'join',
      index: 0,
      projectImg: './assets/images/join.png',
      name: 'Join',
      description:
        'Join ist eine webbasierte Business Anwendung für Task-Management, die eine einfache und effiziente Organisation von Aufgaben und Kontakten ermöglicht.',
      implementationDetails:
        'In dieser Angular-Anwendung können nach der Authentifizierung Tasks und Kontakte über Firebase angelegt und verwaltet werden. Die Tasks können per Drag & Drop in verschiedene Status überführt werden.',
      duration: '5 Wochen',
      techniques: [
        {
          techniqueImg: './assets/images/04_Icons/HTML.svg',
          technique: 'HTML',
        },
        { techniqueImg: './assets/images/04_Icons/css.svg', technique: 'CSS' },
        {
          techniqueImg: './assets/images/04_Icons/ts.svg',
          technique: 'TypeScript',
        },
        {
          techniqueImg: './assets/images/04_Icons/angular.svg',
          technique: 'Angular',
        },
        {
          techniqueImg: './assets/images/04_Icons/firebase.svg',
          technique: 'FireBase',
        },
        {
          techniqueImg: './assets/images/04_Icons/materialDesign.svg',
          technique: 'Material Design',
        },
        {
          techniqueImg: './assets/images/04_Icons/scrum.svg',
          technique: 'Scrum',
        },
      ],
      linkGitHub: 'https://github.com/MarcoGoll',
      linkLive: 'https://join.marcogollmer.de',
      featuredProject: true,
    },
    {
      id: 'sharkie',
      index: 1,
      projectImg: './assets/images/sharkie.png',
      name: 'Sharkie',
      description:
        'Hilf SHARKIE, sich durch Wellen von Kugelfischen und Quallen zu kämpfen, um den ultimativen Showdown mit dem bösen Orca STRESSED WILLY zu erreichen!',
      implementationDetails:
        'Bei diesem Projekt handelt es sich um eine JavaScript-basierte Anwendung, die sich auf die Grundsätze der objektorientierten Programmierung (OOP) konzentriert. Es zeigt, wie man Code mit Klassen, Vererbung und Kapselung strukturiert und eine modulare und skalierbare Anwendung erstellt.',
      duration: '4 Wochen',
      techniques: [
        {
          techniqueImg: './assets/images/04_Icons/HTML.svg',
          technique: 'HTML',
        },
        { techniqueImg: './assets/images/04_Icons/css.svg', technique: 'CSS' },
        {
          techniqueImg: './assets/images/04_Icons/js.svg',
          technique: 'JavaScript',
        },
      ],
      linkGitHub: 'https://github.com/MarcoGoll/da_018_sharkie',
      linkLive: 'https://sharkie.marcogollmer.de',
      featuredProject: false,
    },
    {
      id: 'pokedex',
      index: 2,
      projectImg: './assets/images/pokedex.png',
      name: 'Pokedex',
      description:
        'Dieses Pokédex-Projekt ist eine Webanwendung, mit der Benutzer detaillierte Informationen über Pokémon erforschen können. Es wurde mit JavaScript, HTML und CSS erstellt, holt Daten dynamisch ab und präsentiert sie in einer interaktiven und benutzerfreundlichen Oberfläche.',
      implementationDetails:
        'Dieses Projekt konzentriert sich auf die Verwendung von JavaScript und REST-APIs und zeigt, wie man Daten von externen APIs dynamisch abruft, verarbeitet und anzeigt.',
      duration: '2 Weeks',
      techniques: [
        {
          techniqueImg: './assets/images/04_Icons/HTML.svg',
          technique: 'HTML',
        },
        { techniqueImg: './assets/images/04_Icons/css.svg', technique: 'CSS' },
        {
          techniqueImg: './assets/images/04_Icons/js.svg',
          technique: 'JavaScript',
        },
        {
          techniqueImg: './assets/images/04_Icons/restapi.svg',
          technique: 'REST API',
        },
      ],
      linkGitHub: 'https://github.com/MarcoGoll/da_015_pokedex',
      linkLive: 'https://pokedex.marcogollmer.de',
      featuredProject: false,
    },
  ];

  /**
   * Changes the language of the application and updates the projects array accordingly.
   *
   * @param { "en" | "de" } value - The language to switch to. Can be either `"en"` for English or `"de"` for German.
   */
  changeLanguageTo(value: 'en' | 'de') {
    this.currentLanguage = value;
    this.translate.use(this.currentLanguage);
    if (value === 'en') {
      this.currentProjectsArray = this.projectsEN;
    }
    if (value === 'de') {
      this.currentProjectsArray = this.projectsDE;
    }
  }
}
