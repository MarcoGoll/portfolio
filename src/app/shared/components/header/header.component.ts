import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParentFirstChildTopDownDirective } from '../../directive/parent-first-child-top-down.directive';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ParentFirstChildTopDownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
