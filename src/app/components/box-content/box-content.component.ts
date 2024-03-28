import { Component } from '@angular/core';
import {CurriculumContentComponent} from '../curriculum-content/curriculum-content.component'
import { ButtonPageLinkComponent } from "../button-page-link/button-page-link.component";

@Component({
    selector: 'app-box-content',
    standalone: true,
    templateUrl: './box-content.component.html',
    styleUrl: './box-content.component.css',
    imports: [CurriculumContentComponent, ButtonPageLinkComponent]
})
export class BoxContentComponent {

}
