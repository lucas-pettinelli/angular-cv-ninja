import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component'

@Component({
  selector: 'app-button-page-link',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './button-page-link.component.html',
  styleUrl: './button-page-link.component.css'
})
export class ButtonPageLinkComponent implements OnInit {
  ngOnInit(): void { }
}
