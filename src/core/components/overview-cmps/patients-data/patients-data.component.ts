import { Component } from '@angular/core';
//
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowRightCircleFill,
  bootstrapArrowLeftCircleFill,
} from '@ng-icons/bootstrap-icons';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patients-data',
  standalone: true,
  imports: [
    NgIconComponent,
    OverviewNavComponent,
    RouterLink,
    NgrxFormsModule,
    StoreModule,
  ],
  templateUrl: './patients-data.component.html',
  styleUrl: './patients-data.component.css',
  viewProviders: [
    provideIcons({
      bootstrapArrowRightCircleFill,
      bootstrapArrowLeftCircleFill,
    }),
  ],
})
export class PatientsDataComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
}
