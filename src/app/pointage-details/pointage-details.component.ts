import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { PointagesService } from './pointages.service';
import { Escale } from '../model/escale.model';
import { EscaleService } from '../escales-list/escales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pointage-details',
  templateUrl: './pointage-details.component.html',
  styleUrl: './pointage-details.component.css'
})
export class PointageDetailsComponent implements OnInit {
  escale?: Escale;  // Using the non-null assertion operator

  constructor(
    private escaleService: EscaleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Get the id from the route parameters
      this.getEscaleById(id);
    });
  }

  getEscaleById(id: string): void {
    this.escaleService.getEscaleById(id).subscribe(
      escale => {
        this.escale = escale;
      },
      error => console.error('Error fetching escale:', error)
    );
  }
}