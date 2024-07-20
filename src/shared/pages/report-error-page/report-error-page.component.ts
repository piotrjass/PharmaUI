import { Component } from '@angular/core';
import { ReportErrorFormComponent } from '../../../core/components/report-error-page-cmps/report-error-form/report-error-form.component';
import { TopNavbarComponent } from '../../component/top-navbar/top-navbar.component';

@Component({
  selector: 'app-report-error-page',
  standalone: true,
  imports: [ReportErrorFormComponent, TopNavbarComponent],
  templateUrl: './report-error-page.component.html',
  styleUrl: './report-error-page.component.css',
})
export class ReportErrorPageComponent {}
