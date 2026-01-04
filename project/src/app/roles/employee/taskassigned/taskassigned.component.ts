import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-assigned', // This MUST match the tag in your HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskassigned.component.html',
  styleUrls: ['./taskassigned.component.css']
})
export class TasksComponent {
  // This allows the parent to pass [tasks]="detailedTasks()"
  @Input() tasks: any[] = [];
}