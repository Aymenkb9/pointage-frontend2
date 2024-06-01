import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  styleUrls: ['./delete-confirmation-dialog.component.css'] , // Déclarez ici le fichier CSS
  template: `
   <div class="delete-confirmation-dialog">
    <h1 mat-dialog-title>Confirmation de suppression</h1>
    <div mat-dialog-content>
      <p>Êtes-vous sûr de vouloir supprimer cette escale ?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancelClick()">Annuler</button>
      <button mat-button color="warn" (click)="onConfirmClick()">Supprimer</button>
    </div>
</div>

  `,
})
export class DeleteConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

