import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerBolt } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-add-interaction-form',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './add-interaction-form.component.html',
  styleUrl: './add-interaction-form.component.css',
  viewProviders: [
    provideIcons({
      tablerBolt,
    }),
  ],
})
export class AddInteractionFormComponent {}
