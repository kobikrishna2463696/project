import { Routes } from '@angular/router';
import { HomeComponent } from './roles/auth/home/home.component';
import { EmployeeComponent } from './roles/employee/employee.component';
import { AdminComponent } from './roles/admin/admin.component';
import { ManagerComponent } from './roles/manager/manager.component';

// Import the components you use for the tabs
import { ManageusersComponent } from './roles/admin/manageusers/manageusers.component';
import { SystemConfigComponent } from './roles/admin/system-config/system-config.component';
import { GeneratereportsComponent } from './roles/admin/generatereports/generatereports.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'manager', component: ManagerComponent },

    // Admin becomes a parent route
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'users', component: ManageusersComponent },
            { path: 'organization', component: GeneratereportsComponent },
            { path: 'system', component: SystemConfigComponent },
            { path: '', redirectTo: 'users', pathMatch: 'full' } // Default to users tab
        ]
    },
];