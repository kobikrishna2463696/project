import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-reports', // This MUST match the tag in your HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personalreport.component.html',
  styleUrls: ['./personalreport.component.css']
})
export class PersonalreportsComponent { } // Note the capitalized 'P'