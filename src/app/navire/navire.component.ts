import { Component, OnInit } from '@angular/core';
import { Navire } from '../model/navire.model';
import { NavireService } from './navire.service';

@Component({
  selector: 'app-navire',
  templateUrl: './navire.component.html',
  styleUrls: ['./navire.component.css']
})
export class NavireComponent implements OnInit {
  navires: Navire[] = [];

  constructor(private navireService: NavireService) {}

  ngOnInit() {
    this.getNavires();
  }

  getNavires(): void {
    this.navireService.getAllNavires().subscribe({
      next: (data: Navire[]) => {
        this.navires = data;
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }
}
