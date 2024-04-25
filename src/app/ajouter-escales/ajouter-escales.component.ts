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
    pointage: {
      id: '',
      escales: []
    },
  connaissement:{
    id: '',
    num: 0,
    escale: []
  },
  terminal:{
    id: '',
    identif: '',
    capacite: '',
    statut: '',
    escale: [],
    port:[]
  },
  };
  constructor(private escaleService: EscaleService) {}
   
  saveEscale(): void {
    this.escaleService.saveEscale(this.escales).subscribe(savedEscale => {
      // Mettez à jour la liste des escales ou effectuez d'autres actions nécessaires
      console.log('Escale saved:', savedEscale);
    });
  }
}
