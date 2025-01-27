import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { }

  projects: Project[] = [{
    id: "join",
    index: 0,
    projectImg: "./assets/images/laptop.png",
    name: "Join",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "5 Weeks",
    techniques: [{ techniqueImg: "", technique: "" }]
  },
  {
    id: "sharkie",
    index: 1,
    projectImg: "./assets/images/sharkie.png",
    name: "Sharkie",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "4 Weeks",
    techniques: [
      { techniqueImg: "./assets/images/04_Icons/HTML.svg", technique: "HTML" },
      { techniqueImg: "./assets/images/04_Icons/css.svg", technique: "CSS" },
      { techniqueImg: "./assets/images/04_Icons/js.svg", technique: "JavaScript" }
    ]
  },
  {
    id: "pokedex",
    index: 2,
    projectImg: "./assets/images/pokedex.png",
    name: "Pokedex",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "2 Weeks",
    techniques: [
      { techniqueImg: "./assets/images/04_Icons/HTML.svg", technique: "HTML" },
      { techniqueImg: "./assets/images/04_Icons/css.svg", technique: "CSS" },
      { techniqueImg: "./assets/images/04_Icons/js.svg", technique: "JavaScript" },
      { techniqueImg: "./assets/images/04_Icons/restapi.svg", technique: "REST API" },
    ]
  }
  ];
}
