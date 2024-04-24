import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Escale } from '../model/escale.model';
import { EscaleService } from './escales.service';

@Component({
  selector: 'app-escales-list',
  templateUrl: './escales-list.component.html',
  styleUrls: ['./escales-list.component.css'],
})
export class EscalesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  escales: Escale[] = [];

  constructor(private escaleService: EscaleService) {}
   
  ngOnInit(): void {
    this.getEscales();
  }

  getEscales(): void {
    this.escaleService.getAllEscales().subscribe(escales => this.escales = escales);
  }

  saveEscale(escale: Escale): void {
    this.escaleService.saveEscale(escale).subscribe(savedEscale => {
      // Mettez à jour la liste des escales ou effectuez d'autres actions nécessaires
      console.log('Escale saved:', savedEscale);
    });
  }

  updateEscale(id: string, escale: Escale): void {
    this.escaleService.updateEscale(id, escale).subscribe(updatedEscale => {
      // Mettez à jour la liste des escales ou effectuez d'autres actions nécessaires
      console.log('Escale updated:', updatedEscale);
    });
  }

  deleteEscale(id: string): void {
    this.escaleService.deleteEscale(id).subscribe(() => {
      // Supprimez l'escale de la liste ou effectuez d'autres actions nécessaires
      console.log('Escale deleted:', id);
      // Rechargez la liste des escales après la suppression
      this.getEscales();
    });
  }
}
