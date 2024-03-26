import { Component } from '@angular/core';
import {CurriculumContentComponent} from '../curriculum-content/curriculum-content.component'

@Component({
    selector: 'app-box-content',
    standalone: true,
    templateUrl: './box-content.component.html',
    styleUrl: './box-content.component.css',
    imports: [CurriculumContentComponent]
})
export class BoxContentComponent {

}
