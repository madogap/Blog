import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  menuOptions = [
    { label: 'Início', link: '/home' },
    { label: 'Blog', link: '/blog' },
    { label: 'Sobre', link: '/about' },
    // Adicione mais opções de menu conforme necessário
  ];
}
