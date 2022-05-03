import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyforge',
  templateUrl: './keyforge.component.html',
  styleUrls: ['../../home/style.css']
})
export class KeyforgeComponent implements OnInit {

  decksData:any=[
    {
      name: "Nuriel, la Devota del Cielo Velenoso",
      image: "https://i.imgur.com/0naDXI2.jpg",
      sas: "73",
      cas1: "https://i.imgur.com/HfPVGaB.png",
      cas2: "https://i.imgur.com/4DQ1wqm.png",
      cas3: "https://i.imgur.com/Ny2muZj.png",
      url: "https://decksofkeyforge.com/decks/58a6cc12-8202-465b-ab51-efd0d525e127",
      exp: "Dark Tidings",
    },
    {
      name: "Dioniso “Arlecchino” l’Alto",
      image: "https://i.imgur.com/XBJgcH2.jpg",
      sas: "68",
      cas1: "https://i.imgur.com/HfPVGaB.png",
      cas2: "https://i.imgur.com/0nnetOv.png",
      cas3: "https://i.imgur.com/4DQ1wqm.png",
      url: "https://decksofkeyforge.com/decks/79e7ecaf-6ae7-4c91-8575-41187f0460b3",
      exp: "Worlds Collide",
    },
    {
      name: "C. T. Che Insegna l’Assurdità della Stella",
      image: "https://i.imgur.com/JtERgpj.jpg",
      sas: "61",
      cas1: "https://i.imgur.com/cuyMCRb.png",
      cas2: "https://i.imgur.com/zy1alb0.png",
      cas3: "https://i.imgur.com/0nnetOv.png",
      url: "https://decksofkeyforge.com/decks/dc67a878-6133-43ef-ba7d-dc5736d64e64",
      exp: "Worlds Collide",
    },
    {
      name: "Z. C. Che Fugge con la Bizzarria della Piana",
      image: "https://i.imgur.com/8opAHgL.jpg",
      sas: "59",
      cas1: "https://i.imgur.com/cuyMCRb.png",
      cas2: "https://i.imgur.com/4DQ1wqm.png",
      cas3: "https://i.imgur.com/0nnetOv.png",
      url: "https://decksofkeyforge.com/decks/520c5195-ae7d-43db-ae80-e455e839c582",
      exp: "Mass Mutation",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
