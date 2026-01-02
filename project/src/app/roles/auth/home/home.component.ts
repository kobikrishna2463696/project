import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
