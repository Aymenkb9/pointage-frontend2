import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { PointagesService } from './pointages.service';
import { Escale } from '../model/escale.model';
import { EscaleService } from '../escales-list/escales.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-pointage-details',
  templateUrl: './pointage-details.component.html',
  styleUrls: ['./pointage-details.component.css']
})
export class PointageDetailsComponent implements OnInit {
  voituresDisplayedColumns: string[] = ['numConnaissement', 'lot', 'marque', 'datePointage', 'provenance', 'client', 'manifeste', 'pointe', 'vinCharge'];
  // Tableau pour les colonnes du tableau "Détails"
detailsDisplayedColumns: string[] = ['numConnaissement', 'lot', 'vin', 'marque', 'modele', 'agentMaritime', 'pointeur', 'datePointage', 'reserve','etat'];

// Tableau pour les colonnes du tableau "Overland"
overlandDisplayedColumns: string[] = ['numConnaissement', 'lot', 'vin', 'marque', 'modele', 'agentMaritime', 'pointeur', 'datePointage', 'reserve','etat','actions'];

@ViewChild(MatPaginator) paginator!: MatPaginator;

  voituresDataSource = new MatTableDataSource<Voiture>(); // Assurez-vous de remplacer 'Voiture' par le type approprié pour vos données

  escale?: Escale;  // Utilisation de l'opérateur de non-nullité

  constructor(
    private escaleService: EscaleService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private pointagesService: PointagesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Obtenir l'ID à partir des paramètres de la route
      this.getEscaleById(id);
    });
  }

  getEscaleById(id: string): void {
    this.escaleService.getEscaleById(id).subscribe(
      escale => {
        this.escale = escale;
        // Mettre à jour les données du tableau avec les voitures de l'escale
        this.voituresDataSource.data = escale.navire.voitures;
        this.voituresDataSource.paginator = this.paginator; // Configurer le paginator

      },
      error => console.error('Erreur lors de la récupération de l\'escale :', error)
    );
  }
  deleteVoiture(id: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pointagesService.deleteVoiture(id).subscribe(() => {
          // Supprimez la voiture de la liste ou effectuez d'autres actions nécessaires
          console.log('Voiture deleted:', id);
          // Rechargez la liste des voitures après la suppression
          this.getEscaleById(this.escale!.id); // Rechargez les données de l'escale
        });
      }
    });
  }
  
  }
  
  

  
  
