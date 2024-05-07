import { Component } from '@angular/core';
import { Escale } from '../model/escale.model';
import { EscaleService } from '../escales-list/escales.service';
import { Port } from '../model/port.model';

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
    navire: {
      id: '',
      nom: '',
      Capacite: 0,
      compagnie: '',
      tonnage: 0,
      statut: '',
      voitures: [],
      escaleId: ''
    },
    client: {
      id: '',
      nom: '',
      contact: '',
      ice: '',
      typeClient: {
        id: '',
        code: '',
        libelle: '',
        clients: []
      },
      active: false,
      escale: [],
    },
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
    port:{
      id: '',
      provenance: '',
      destination: '',
      terminals: []
    },
  },
  };
  constructor(private escaleService: EscaleService) {}
   
  saveEscale(): void {

    var test = {
     id: "ecd63fbd-d497-4bf5-8438-1ad2ab6e202e",
     numEscale: 0
  };
    this.escaleService.saveEscale(test).subscribe(savedEscale => {
      // Mettez à jour la liste des escales ou effectuez d'autres actions nécessaires
      console.log('Escale saved:', savedEscale);
    });
  }
}