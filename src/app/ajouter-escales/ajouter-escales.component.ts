import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importer MatSnackBar
import { EscaleService } from '../escales-list/escales.service';
import { SaveEscaleDTO } from '../model/saveescale.model';

@Component({
  selector: 'app-ajouter-escales',
  templateUrl: './ajouter-escales.component.html',
  styleUrls: ['./ajouter-escales.component.css']
})
export class AjouterEscalesComponent {
  escale: SaveEscaleDTO = {
    numEscale: 0,
    numVoyage: '',
    nomNavire: '',
    identifTerminal: '',
    nomClient: '', // Ajout du champ pour le nom du client
    provenance: '',
    statutTerminal: 'OCCUPE', // Initialisez avec une valeur par défaut
    statutNavire: 'EN_ATTENTE' // Champ pour le statut du navire
  };

  constructor(private escaleService: EscaleService, private snackBar: MatSnackBar) {} // Injecter MatSnackBar

  saveEscale(): void {
    this.escaleService.saveEscale(this.escale).subscribe(
      savedEscale => {
        console.log('Escale saved:', savedEscale);
        this.openSnackBar('Escale ajoutée avec succès', 'Fermer'); // Afficher la notification
      },
      error => {
        console.error('Failed to save escale:', error);
        // Gérer les erreurs, afficher les retours utilisateur
      }
    );
  }

  resetEscale(): void {
    this.escale = {
      numEscale: 0,
      numVoyage: '',
      nomNavire: '',
      identifTerminal: '',
      nomClient: '', 
      provenance: '',
      statutTerminal: 'OCCUPE', 
      statutNavire: 'EN_ATTENTE' 
    };
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 4000, // Durée de la notification en millisecondes
    });
  }
}
