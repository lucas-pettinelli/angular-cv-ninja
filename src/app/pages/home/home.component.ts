import { Component, OnInit } from '@angular/core';
import { BoxContentComponent } from "../../components/box-content/box-content.component";
import { ButtonPageLinkComponent } from "../../components/button-page-link/button-page-link.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BoxContentComponent, ButtonPageLinkComponent]
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {    }

}
