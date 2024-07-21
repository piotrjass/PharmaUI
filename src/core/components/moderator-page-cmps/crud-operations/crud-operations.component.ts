import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crud-operations',
  standalone: true,
  imports: [],
  templateUrl: './crud-operations.component.html',
  styleUrl: './crud-operations.component.css',
})
export class CrudOperationsComponent {
  @Input() list_title: string = '';
  @Input() add_title: string = '';
  @Input() delete_title: string = '';
  @Input() items: string[] = [];
}
