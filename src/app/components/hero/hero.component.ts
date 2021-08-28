import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { Hero } from './hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heros = HEROES;
  selectedHero?: Hero;

  constructor() { }
  
  ngOnInit(): void {
  }
      
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

}
