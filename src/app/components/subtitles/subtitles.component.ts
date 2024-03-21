import { Component } from '@angular/core';
import { DownloadButtonComponent } from "../download-button/download-button.component";

@Component({
    selector: 'app-subtitles',
    standalone: true,
    templateUrl: './subtitles.component.html',
    styleUrl: './subtitles.component.css',
    imports: [DownloadButtonComponent]
})
export class SubtitlesComponent {

}
