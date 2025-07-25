import { Component, signal } from '@angular/core';
import { SharedModule } from '~/app/shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { UiModule } from '~/app/shared/ui/ui.module';

@Component({
  selector: 'app-admin',
  imports: [SharedModule, UiModule, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  activeRoute = signal('/admin');
  sidebarOpened = signal(true);
  readonly sidebarRoutes = [
    { title: 'Jobs', path: '/admin', icon: 'cases' },
    { title: 'Teams', path: '/admin/teams', icon: 'group' },
    { title: 'Members', path: '/admin/members', icon: 'person' },
  ];

  constructor(private location: Location) {
    this.activeRoute.set(this.location.path());
  }
}
