import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-escales-list',
  templateUrl: './escales-list.component.html',
  styleUrl: './escales-list.component.css',
})
export class EscalesListComponent {
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
escales: any;


}
