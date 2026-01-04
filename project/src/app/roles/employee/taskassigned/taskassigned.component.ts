import { Component } from '@angular/core';


@Component({
  selector: 'app-tasks-assigned', // This MUST match the tag in your HTML
  standalone: true,
  imports: [],
  templateUrl: './taskassigned.component.html',
  styleUrls: ['./taskassigned.component.css']
})
export class TasksComponent {
  // This allows the parent to pass [tasks]="detailedTasks()"

}