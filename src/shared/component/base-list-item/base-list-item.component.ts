import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPatchMinusFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-base-list-item',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './base-list-item.component.html',
  styleUrl: './base-list-item.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPatchMinusFill,
    }),
  ],
})
export class BaseListItemComponent {
  @Input() name: string = '';
  @Input() index: number = 0;
}
