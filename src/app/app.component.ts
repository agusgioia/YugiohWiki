import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink, FooterComponent, HeaderComponent, CommonModule,SearchComponent],
  standalone:true
})
export class AppComponent {
  title = 'YugiohWiki';
}
