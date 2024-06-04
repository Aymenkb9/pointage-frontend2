import { Component } from '@angular/core';
import { Reserve } from '../model/reserve.model';

@Component({
  selector: 'app-ajouter-reserve',
  templateUrl: './ajouter-reserve.component.html',
  styleUrls: ['./ajouter-reserve.component.css']
})
export class AjouterReserveComponent {
  reserveData: Reserve = {
    id: '',
    nature: '',
    zoneReserve: '',
    emplaceReserve: ''
  };

  constructor() {}

  // Méthode pour ajouter une réserve
  ajouterReserve(): void {
    // Vous pouvez effectuer des validations ici si nécessaire

    // Ajouter la réserve à la liste ou effectuer toute autre action nécessaire
    console.log('Nouvelle réserve:', this.reserveData);
    // Réinitialiser les données de réserve après l'ajout
    this.resetForm();
  }

  // Méthode pour réinitialiser les données de réserve
  resetForm(): void {
    this.reserveData = {
      id: '',
      nature: '',
      zoneReserve: '',
      emplaceReserve: ''
    };
  }
}
