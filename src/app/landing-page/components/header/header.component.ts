import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuList = [
    { name: 'Home', link: '#home' },
    { name: 'About us', link: '#about' },
    { name: 'How it works', link: '#how-it-works' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' },
  ];
}
