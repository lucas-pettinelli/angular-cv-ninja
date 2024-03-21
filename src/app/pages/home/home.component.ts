import { Component } from '@angular/core';
import { BoxContentComponent } from "../../components/box-content/box-content.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BoxContentComponent]
})
export class HomeComponent {

}
