import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParentFirstChildTopDownDirective } from '../../directive/parent-first-child-top-down.directive';
import { ParentFirstChildLeftRightDirective } from '../../directive/parent-first-child-left-right.directive';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ParentFirstChildTopDownDirective, ParentFirstChildLeftRightDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
