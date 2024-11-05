import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { SingleDrugComponent } from '../single-drug/single-drug.component';
import {
  bootstrapPatchMinusFill,
  bootstrapPatchPlusFill,
  bootstrapArrowDownCircleFill,
} from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-drug-form',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './add-drug-form.component.html',
  styleUrl: './add-drug-form.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPlusLg,
      bootstrapPatchPlusFill,
      bootstrapArrowDownCircleFill,
    }),
  ],
})
export class AddDrugFormComponent {
  showAddDrugSection: boolean = true;

  toggleShowAddDrugSection() {
    this.showAddDrugSection = !this.showAddDrugSection;
  }
}
