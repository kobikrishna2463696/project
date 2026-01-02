import { Component } from '@angular/core';
import { TaskManagementComponent } from './task-management/task-management.component';

@Component({
  selector: 'app-manager',
  imports: [TaskManagementComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
