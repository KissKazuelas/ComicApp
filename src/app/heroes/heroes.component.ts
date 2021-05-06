import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService } from '../shared/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(public servicio: HeroeService, public router: Router) { }

  ngOnInit(): void {
  }

}
