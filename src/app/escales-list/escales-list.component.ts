import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Escale } from '../model/escale.model';
import { EscaleService } from './escales.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-escales-list',
  templateUrl: './escales-list.component.html',
  styleUrls: ['./escales-list.component.css'],
})
export class EscalesListComponent implements OnInit {
  dataSource: MatTableDataSource<Escale>;

  displayedColumns: string[] = ['numEscale', 'nomNavire', 'numVoyage', 'terminal', 'agentMaritime', 'portProvenance', 'destination', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  escales: Escale[] = [];
  escale: any;
  searchTerm: string = '';

  constructor(private escaleService: EscaleService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource<Escale>([]);
  }

  ngOnInit(): void {
    this.getEscales();
  }

  getEscales(): void {
    this.escaleService.getAllEscales().subscribe(escales => {
      this.escales = escales;
      this.dataSource.data = this.escales; // Assign data to MatTableDataSource
      this.dataSource.paginator = this.paginator; // Assign the paginator here
      this.applyFilter(); // Apply the filter after getting data
    });
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  updateEscale(id: string, escale: Escale): void {
    this.escaleService.updateEscale(id, escale).subscribe(updatedEscale => {
      // Mettez à jour la liste des escales ou effectuez d'autres actions nécessaires
      console.log('Escale updated:', updatedEscale);
    });
  }

  deleteEscale(id: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {
        message: 'Voulez-vous vraiment supprimer cette escale ?',
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.escaleService.deleteEscale(id).subscribe(() => {
          console.log('Escale deleted:', id);
          this.getEscales();
          this.snackBar.open('Escale supprimée avec succès.', 'Fermer', {
            duration: 3000, // Durée pendant laquelle le message est affiché (en millisecondes)
          });
        });
      }
    });
  }
}
