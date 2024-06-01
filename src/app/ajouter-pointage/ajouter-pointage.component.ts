import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AjouterPointageService } from './ajouter-pointage.service';
import { Voiture } from '../model/voiture.model';
import { Escale } from '../model/escale.model';

@Component({
  selector: 'app-ajouter-pointage',
  templateUrl: './ajouter-pointage.component.html',
  styleUrls: ['./ajouter-pointage.component.css']
})
export class AjouterPointageComponent {
  navireId: string = '';
  escale?: Escale;

  constructor(
    private route: ActivatedRoute,
    private ajouterPointageService: AjouterPointageService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.navireId = params['navireId'];
      if (this.navireId) {
        this.getEscaleById(this.navireId);
      } else {
        console.error('ID du navire non défini.');
      }
    });
  }
  
  
  

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

saveVoiture(): void {
    this.ajouterPointageService.saveVoiture(this.voitureData).subscribe(
      response => {
        console.log('Voiture sauvegardée avec succès:', response);
        // Réinitialisez les champs ou effectuez d'autres actions nécessaires après la sauvegarde réussie
      },
      error => {
        console.error('Erreur lors de la sauvegarde de la voiture:', error);
        // Gérez les erreurs de sauvegarde
      }
    );
  }

  getEscaleById(id: string): void {
    this.ajouterPointageService.getEscaleById(id).subscribe(
      escale => {
        this.escale = escale;
        // Utiliser les données de l'escale pour initialiser les champs de la voitureData
        this.voitureData.navire.id = this.navireId;
        this.voitureData.navire.statut = escale.statutNavire; // Assigner le statut du navire
       
        // Assigner d'autres champs selon les besoins
      },
      error => console.error('Erreur lors de la récupération de l\'escale :', error)
    );
}
}
