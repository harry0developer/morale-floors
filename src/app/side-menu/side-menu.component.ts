import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  open: boolean;

  constructor(public router: Router, public dataService: DataService) {
    this.dataService.statusSubject.next(false);
  }

  isRouteActive(routeUrl: string): boolean {
    return routeUrl === this.router.url;
  }

  closeMenu() {
    this.open = false;
    this.dataService.toggleStatus(false);
  }
}
