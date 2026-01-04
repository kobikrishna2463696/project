import { Component } from '@angular/core';
import { DashboardemployeeComponent } from './dashboard/dashboard.component';
import { employeeGuard } from '../../core/services/guards/employee.guard';

@Component({
  selector: 'app-employee',
  imports: [DashboardemployeeComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
