import { Component } from '@angular/core';
import { Terminal } from '../model/terminal.model';
import { TerminaleService } from './terminale.service';

@Component({
  selector: 'app-terminale',
  templateUrl: './terminale.component.html',
  styleUrl: './terminale.component.css'
})
export class TerminaleComponent {
  terminals: Terminal[] = [];

  constructor(private TerminaleService: TerminaleService) {}

  ngOnInit() {
    this.getTerminals();
  }

  getTerminals(): void {
    this.TerminaleService.getAllTerminals().subscribe({
      next: (data) => {
        this.terminals = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}

