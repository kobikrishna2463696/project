import { Routes } from '@angular/router';
import { HomeComponent } from './roles/auth/home/home.component';
import { EmployeeComponent } from './roles/employee/employee.component';
import { AdminComponent } from './roles/admin/admin.component';
import { ManagerComponent } from './roles/manager/manager.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'admin',component:AdminComponent},
    {path:'manager',component:ManagerComponent}
];
