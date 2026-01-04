import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for search input

// Define the User interface for strict typing
interface User {
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  type: string;
}

@Component({
  selector: 'app-manageusers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent {
  // Exact data from your high-fidelity screenshot
  users: User[] = [
    { name: 'John Smith', email: 'john.smith@company.com', role: 'Employee', department: 'Engineering', status: 'Active', type: 'Demo' },
    { name: 'Sarah Johnson', email: 'sarah.johnson@company.com', role: 'Manager', department: 'Engineering', status: 'Active', type: 'Demo' },
    { name: 'Michael Brown', email: 'michael.brown@company.com', role: 'Admin', department: 'IT', status: 'Active', type: 'Demo' },
    { name: 'Emily Davis', email: 'emily.davis@company.com', role: 'Employee', department: 'Engineering', status: 'Active', type: 'Demo' },
    { name: 'David Wilson', email: 'david.wilson@company.com', role: 'Employee', department: 'Engineering', status: 'Active', type: 'Demo' },
    { name: 'Lisa Anderson', email: 'lisa.anderson@company.com', role: 'Employee', department: 'Marketing', status: 'Active', type: 'Demo' }
  ];

  // Logic for the 'Add User' button
  addUser() {
    console.log('Opening add user modal...');
    // You can implement modal logic here
  }

  // Placeholder for search logic
  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    // Logic to filter the users array
  }
}