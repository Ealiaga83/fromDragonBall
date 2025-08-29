import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { DragonballService } from '../service/dragonball-service';

@Component({
  selector: 'app-pg-principal',
  imports: [],
  templateUrl: './pg-principal.html',
  styleUrl: './pg-principal.css'
})
export class PgPrincipal {
   personajes: Character[] = [];

  constructor(private dragonballService: DragonballService) { }

  ngOnInit(): void {
    this.dragonballService.obtenerData().subscribe(data => {
      this.personajes = data;
    });
  }

}
