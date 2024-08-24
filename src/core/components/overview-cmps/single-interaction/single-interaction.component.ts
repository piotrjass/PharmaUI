import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerBolt } from '@ng-icons/tabler-icons';
import { AddInteractionFormComponent } from '../add-interaction-form/add-interaction-form.component';
@Component({
  selector: 'app-single-interaction',
  standalone: true,
  imports: [NgIconComponent, AddInteractionFormComponent],
  templateUrl: './single-interaction.component.html',
  styleUrl: './single-interaction.component.css',
  viewProviders: [
    provideIcons({
      tablerBolt,
    }),
  ],
})
export class SingleInteractionComponent {
  @Input() substance1 = 'Paracetamolum';
  @Input() substance2 = 'Ibuprofenum';
  @Input() product1 = 'Apap';
  @Input() product2 = 'Infex';
}
