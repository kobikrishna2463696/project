import { Routes } from '@angular/router';
import { employeeGuard } from '../../core/services/guards/employee.guard';
export const EMPLOYEE_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component')
            .then(m => m.DashboardemployeeComponent), // Changed from EmployeeDashboardComponent
        canActivate: [employeeGuard]
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];