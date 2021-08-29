import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { MessagesService } from 'src/app/service/messages.service';
import { Hero } from './hero';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heros: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService:HeroService, private messageService: MessagesService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }
      
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero ${hero.name} who id is = ${hero.id}`)
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heros => this.heros = heros)
  }

}
