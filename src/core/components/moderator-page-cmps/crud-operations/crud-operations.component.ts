import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() addItem = new EventEmitter<string>();
  @Output() deleteItem = new EventEmitter<string>();

  onAddItem(item: string) {
    this.addItem.emit(item);
  }
  onDeleteItem(item: string) {
    this.deleteItem.emit(item);
  }
}
