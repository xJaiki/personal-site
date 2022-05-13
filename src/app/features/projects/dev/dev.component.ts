import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['../../home/style.css']
})
export class DevComponent implements OnInit {

  devPrjData:any = [
    {
      name: "zhome",
      type: "web dev",
      desc: "zhome is a startpage highly inspired from Zune with a working clock and weather! Entirely made in pure html, css, js",
      image: "https://i.imgur.com/tvTmcI8.png",
      url: "https://github.com/xJaiki/zhome"
    },{
      name: "pastelhome",
      type: "web dev",
      desc: "pastel home is a minimal startpage with colorful pastel theme and animations made with Angular.",
      image: "https://i.imgur.com/oQxNTU4.png",
      url: "https://github.com/xJaiki/pastel-home"
    },{
      name: "Boardbox Master",
      type: "iOS app",
      desc: "Boardbox Master is a school group project developed at iOS Foundation program made by Università degli studi di Napoli Parthenope and Apple. This iPhone application is a companion app for board games and roleplay games. The goal of the app is to make the board games easier to organize and play.",
      image: "https://i.imgur.com/9kPPsJE.png",
      url: "https://github.com/xJaiki/BoardBoxMaster"
    },{
      name: "CampaignON",
      type: "iOS/tvOS app",
      desc: "CampaignON is the 'spirital sequel' of Boardbox Master. This project was made with a different group at iOS Foundation Program. This application has the same goal of Boardbox Master but this time there is a total integration with Apple TV to make the board box and roleplay games experience more easier.",
      image: "https://i.imgur.com/tEptDcQ.png",
      url: "https://github.com/xJaiki/CampaignON"
    },{
      name: "Coffe Break",
      type: "xCode Playground",
      desc: "Playground project made for WWDC 2021 schoolarship competitionCoffee Break is a little top down racing game inspired by the Gran Turismo 4 mini game Coffee Break.In this little game you have to drive a the car from the start to the end avoiding the obstacles. The game has 3 unique levels.",
      image: "https://i.imgur.com/Ul27V0Z.png",
      url: "https://github.com/xJaiki/Coffee-Break"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
