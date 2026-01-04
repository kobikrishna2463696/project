import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, FeaturesComponent, AboutComponent, FooterComponent, FooterComponent] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
