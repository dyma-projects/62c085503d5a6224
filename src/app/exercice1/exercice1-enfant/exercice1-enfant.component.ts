import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input()  compteur:number;
  @Output() changementCompteur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public increCompteur() {
    this.compteur++;
    this.changementCompteur.emit({ value: this.compteur })
  }
  
  public decreCompteur() {
    this.compteur--;
    this.changementCompteur.emit({ value: this.compteur })
  }

}
