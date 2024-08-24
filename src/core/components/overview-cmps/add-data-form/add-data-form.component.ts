import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { bootstrapPatchPlusFill } from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-add-data-form',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './add-data-form.component.html',
  styleUrl: './add-data-form.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
    }),
  ],
})
export class AddDataFormComponent {}
