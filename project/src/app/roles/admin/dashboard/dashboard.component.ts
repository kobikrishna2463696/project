// src/app/roles/admin/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // 'dashboard' shows only stats; 'user-management' shows the separate component
  activeTab: string = 'dashboard';

  stats = {
    totalUsers: 6,
    activeUsers: 6,
    totalHours: 39,
    totalTasks: 5
  };

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
}