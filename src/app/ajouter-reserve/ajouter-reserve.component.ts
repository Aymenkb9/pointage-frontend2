// Composant
import { Component } from '@angular/core';
import { Reserve } from '../model/reserve.model';
import { AjouterReserveService } from './ajouter-reserve.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Escale } from '../model/escale.model';

@Component({
  selector: 'app-ajouter-reserve',
  templateUrl: './ajouter-reserve.component.html',
  styleUrls: ['./ajouter-reserve.component.css']
})
export class AjouterReserveComponent {
  escale?: Escale;
  voitureId: string = '';

  reserveData: Reserve = {
    id: '',
    nature: '',
    zoneReserve: '',
    emplaceReserve: '',
    voiture: {
      id: '',
      lot: '',
      vin: '',
      marque: '',
      model: '',
      datePointage: new Date,
      etat: '',
      navire: {
        id: '',
        nom: '',
        capacite: 0,
        compagnie: '',
        tonnage: 0,
        statut: '',
        voitures: [],
        escaleId: ''
      },
      reserves: []
    } // Assurez-vous que vous avez les données correctes pour la voiture
  };

  constructor(private ajouterReserveService: AjouterReserveService ,     private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      const escaleId = params['escaleId']; // Récupérer l'ID de l'escale à partir des paramètres de l'URL
      if (escaleId) {
        this.getEscaleById(escaleId);
      } else {
        console.error('ID de l\'escale non défini.');
      }
    });

  }

  getEscaleById(escaleId: string): void {
    this.ajouterReserveService.getEscaleById(escaleId).subscribe(
      escale => {
        this.escale = escale;
        // Utilisez les détails de l'escale dans votre logique ici
        this.reserveData.voiture.id = escale.voitureId; // Assigner l'ID de la voiture de l'escale

      },
      error => console.error('Erreur lors de la récupération de l\'escale :', error)
    );
  }
  ajouterReserve(): void {
    this.ajouterReserveService.ajouterReserve(this.reserveData).subscribe(
      response => {
        console.log('Réserve ajoutée avec succès:', response);
        this.resetForm();
      },
      error => {
        console.error('Erreur lors de l\'ajout de la réserve:', error);
      }
    );
  }

  resetForm(): void {
    this.reserveData = {
      id: '',
      nature: '',
      zoneReserve: '',
      emplaceReserve: '',
      voiture: {
        id: '',
        lot: '',
        vin: '',
        marque: '',
        model: '',
        datePointage: new Date,
        etat: '',
        navire: {
          id: '',
          nom: '',
          capacite: 0,
          compagnie: '',
          tonnage: 0,
          statut: '',
          voitures: [],
          escaleId: ''
        },
        reserves: []
      }
    };
  }
}
