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
    escaleId: ''
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
    this.escaleService.saveEscale(this.escales).subscribe(
      savedEscale => {
        console.log('Escale saved:', savedEscale);
        // Additional actions like navigating away or showing a success message
      },
      error => {
        console.error('Failed to save escale:', error);
        // Handle errors, show user feedback
      }
    );
  } }