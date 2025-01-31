import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { TranslateService, _ } from "@ngx-translate/core";


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  currentLanguage: "en" | "de" = "en";

  constructor(private translate: TranslateService) { }


  projectsEN: Project[] = [{
    id: "join",
    index: 0,
    projectImg: "./assets/images/laptop.png",
    name: "JoinEN",
    description: "JoinLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "5 Weeks",
    techniques: [{ techniqueImg: "", technique: "" }],
    linkGitHub: "https://github.com/MarcoGoll",
    linkLive: "https://join.marcogollmer.de"
  },
  {
    id: "sharkie",
    index: 1,
    projectImg: "./assets/images/sharkie.png",
    name: "SharkieEN",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "4 Weeks",
    techniques: [
      { techniqueImg: "./assets/images/04_Icons/HTML.svg", technique: "HTML" },
      { techniqueImg: "./assets/images/04_Icons/css.svg", technique: "CSS" },
      { techniqueImg: "./assets/images/04_Icons/js.svg", technique: "JavaScript" }
    ],
    linkGitHub: "https://github.com/MarcoGoll/da_018_sharkie",
    linkLive: "https://sharkie.marcogollmer.de"
  },
  {
    id: "pokedex",
    index: 2,
    projectImg: "./assets/images/pokedex.png",
    name: "PokedexEN",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "2 Weeks",
    techniques: [
      { techniqueImg: "./assets/images/04_Icons/HTML.svg", technique: "HTML" },
      { techniqueImg: "./assets/images/04_Icons/css.svg", technique: "CSS" },
      { techniqueImg: "./assets/images/04_Icons/js.svg", technique: "JavaScript" },
      { techniqueImg: "./assets/images/04_Icons/restapi.svg", technique: "REST API" },
    ],
    linkGitHub: "https://github.com/MarcoGoll/da_015_pokedex",
    linkLive: "https://pokedex.marcogollmer.de"
  }
  ];

  projectsDE: Project[] = [{
    id: "join",
    index: 0,
    projectImg: "./assets/images/laptop.png",
    name: "JoinDE",
    description: "JoinLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "5 Weeks",
    techniques: [{ techniqueImg: "", technique: "" }],
    linkGitHub: "https://github.com/MarcoGoll",
    linkLive: "https://join.marcogollmer.de"
  },
  {
    id: "sharkie",
    index: 1,
    projectImg: "./assets/images/sharkie.png",
    name: "SharkieDE",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "4 Weeks",
    techniques: [
      { techniqueImg: "./assets/images/04_Icons/HTML.svg", technique: "HTML" },
      { techniqueImg: "./assets/images/04_Icons/css.svg", technique: "CSS" },
      { techniqueImg: "./assets/images/04_Icons/js.svg", technique: "JavaScript" }
    ],
    linkGitHub: "https://github.com/MarcoGoll/da_018_sharkie",
    linkLive: "https://sharkie.marcogollmer.de"
  },
  {
    id: "pokedex",
    index: 2,
    projectImg: "./assets/images/pokedex.png",
    name: "PokedexDE",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "2 Weeks",
    techniques: [
      { techniqueImg: "./assets/images/04_Icons/HTML.svg", technique: "HTML" },
      { techniqueImg: "./assets/images/04_Icons/css.svg", technique: "CSS" },
      { techniqueImg: "./assets/images/04_Icons/js.svg", technique: "JavaScript" },
      { techniqueImg: "./assets/images/04_Icons/restapi.svg", technique: "REST API" },
    ],
    linkGitHub: "https://github.com/MarcoGoll/da_015_pokedex",
    linkLive: "https://pokedex.marcogollmer.de"
  }
  ];


  toggleLanguage(language: "en" | "de") {
    this.translate.use(language);
    this.setCurrentLanguarge(language);
  }

  setCurrentLanguarge(laguarge: "en" | "de") {
    this.currentLanguage = laguarge;
    console.log("NEW LANG: ", this.currentLanguage);
  }

  getCurrentLanguarge() {
    return this.currentLanguage;
  }
}
