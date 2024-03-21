import { Component } from '@angular/core';
import { SubtitlesComponent } from "../subtitles/subtitles.component";

@Component({
    selector: 'app-box-content',
    standalone: true,
    templateUrl: './box-content.component.html',
    styleUrl: './box-content.component.css',
    imports: [SubtitlesComponent]
})
export class BoxContentComponent {

}
