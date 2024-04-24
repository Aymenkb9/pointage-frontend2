import { Component } from '@angular/core';
import { Escale } from '../model/escale.model';
import { EscaleService } from '../escales-list/escales.service';

@Component({
  selector: 'app-ajouter-escales',
  templateUrl: './ajouter-escales.component.html',
  styleUrls: ['./ajouter-escales.component.css']
})
export class AjouterEscalesComponent {
  escales : Escale = {
    id: '',
    numEscale: 0,
    numVoyage: '',
    navires: [],
    clients: [],
    pointage: undefined,
    connaissement: undefined,
    terminal: undefined
  };
  constructor(private escaleService: EscaleService) {}

  saveEscale(escale: Escale): void {
    this.escaleService.saveEscale(escale).subscribe(savedEscale => {
      // Mettez à jour la liste des escales ou effectuez d'autres actions nécessaires
      console.log('Escale saved:', savedEscale);
    });
  }
}
