import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-my-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-tasks-list.component.html',
  styleUrl: './my-tasks-list.component.css'
})
export class MyTasksListComponent {

  constructor(public auth: AuthService) {

  }
}
