import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageusersComponent } from './manageusers/manageusers.component';

@Component({
  selector: 'app-admin',
  imports: [DashboardComponent,ManageusersComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
