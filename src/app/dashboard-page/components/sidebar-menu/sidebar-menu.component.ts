import { Component } from "@angular/core";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  menuItems = [
    {
      name: 'Sticker Generator',
      icon: 'create',
      path: 'sticker-generator'
    },
    {
      name: 'My Collection',
      path: 'my-collection',
      icon: 'view_list',
    }
  ]
}
