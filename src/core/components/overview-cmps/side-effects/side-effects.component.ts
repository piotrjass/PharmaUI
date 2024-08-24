import { Component } from '@angular/core';
import { OverviewNavComponent } from '../overview-nav/overview-nav.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { BaseListItemComponent } from '../../../../shared/component/base-list-item/base-list-item.component';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
} from '@ng-icons/bootstrap-icons';
import { AddDataFormComponent } from '../add-data-form/add-data-form.component';
@Component({
  selector: 'app-side-effects',
  standalone: true,
  imports: [
    OverviewNavComponent,
    NgIconComponent,
    BaseListItemComponent,
    AddDataFormComponent,
  ],
  templateUrl: './side-effects.component.html',
  styleUrl: './side-effects.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
    }),
  ],
})
export class SideEffectsComponent {
  side_effects: string[] = ['Nadciśnienie', 'Wymioty'];
}
