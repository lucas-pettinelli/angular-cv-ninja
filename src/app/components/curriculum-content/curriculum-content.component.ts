import { Component } from '@angular/core';
import { ButtonPageLinkComponent } from "../button-page-link/button-page-link.component";


@Component({
    selector: 'app-curriculum-content',
    standalone: true,
    templateUrl: './curriculum-content.component.html',
    styleUrl: './curriculum-content.component.css',
    imports: [ButtonPageLinkComponent]
})
export class CurriculumContentComponent {

}
