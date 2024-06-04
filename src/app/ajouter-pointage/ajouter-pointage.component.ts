import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AjouterPointageService } from './ajouter-pointage.service';
import { Voiture } from '../model/voiture.model';
import { Escale } from '../model/escale.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-pointage',
  templateUrl: './ajouter-pointage.component.html',
  styleUrls: ['./ajouter-pointage.component.css']
})
export class AjouterPointageComponent implements OnInit {
  navireId: string = '';
  escale?: Escale;
  voitureData: Voiture = {
    id: '',
    lot: '',
    vin: '1GNEK13Z72J299789',
    marque: '',
    model: '',
    datePointage: new Date(),
    etat: 'EN_COUR',
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
  };

  constructor(
    private route: ActivatedRoute,
    private ajouterPointageService: AjouterPointageService , 
    private snackBar: MatSnackBar
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
  

  saveVoiture(): void {
    this.ajouterPointageService.saveVoiture(this.voitureData).subscribe(
      response => {
        console.log('Voiture sauvegardée avec succès:', response);
        this.openSnackBar('Escale ajoutée avec succès', 'Fermer'); // Afficher la notification

        // Réinitialisez les champs ou effectuez d'autres actions nécessaires après la sauvegarde réussie
      },
      error => {
        console.error('Erreur lors de la sauvegarde de la voiture:', error);
        // Gérez les erreurs de sauvegarde
      }
    );
  }
  getEscaleById(escaleId: string): void {
    this.ajouterPointageService.getEscaleById(escaleId).subscribe(
      escale => {
        this.escale = escale;
        // Utilisez les détails de l'escale dans votre logique ici
        this.voitureData.navire.id = escale.navire.id; // Assigner l'ID du navire de l'escale
        this.voitureData.navire.statut = escale.navire.statut; // Assigner le statut du navire de l'escale
        this.voitureData.navire.escaleId = escale.id; // Assigner l'ID de l'escale
        // Assignez d'autres champs selon les besoins
      },
      error => console.error('Erreur lors de la récupération de l\'escale :', error)
    );
  }
  resetForm(): void {
    // Réinitialisez les valeurs des champs du formulaire à leur état initial
    this.voitureData = {
      id: '',
      lot: '',
      vin: '1GNEK13Z72J299789',
      marque: '',
      model: '',
      datePointage: new Date(),
      etat: 'EN_COUR',
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
    };
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 4000, // Durée de la notification en millisecondes
    });
  }
  
}
