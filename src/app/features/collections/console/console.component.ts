import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['../../home/style.css']
})
export class ConsoleComponent implements OnInit {

  consoleData:any = [
    {
      name: "Xbox",
      status: "modded",
      desc: "I was that weird guy in italian elementary school with Xbox and not the PS2, but god i love this machine, it is for sure my favourite. With this Xbox i got introduced to my favourite videogame saga Halo!",
      image: "https://i.imgur.com/JA7Ohmw.jpg"
    },
    {
      name: "Xbox 360",
      status: "modded",
      desc: "I got the Xbox 360 with kinect for i don't remember which Christmass. I wanted so bad this console only to play Halo 3 and 'finishing the fight!'. Then in the 2021 i got bored and modded it",
      image: "https://i.imgur.com/9QSOqAG.jpg"
    },
    {
      name: "Play Station 1",
      status: "modded",
      desc: "This is a funny story, my very first console was a PS2, 1 week and it broke up so my parents got me a PS1, and thank god i didn't skip the PS1 or i'd lost some masterpiece like Crash Bandicoot and Spyro!",
      image: "https://i.imgur.com/VWuvOqo.jpg"
    },
    {
      name: "Play Station 2 slim",
      status: "modded",
      desc: "As mentioned in the PS1 this was my very first console, but i never enjoyed it in its golden era, i got my 'very first' PS2 in 2020, already modded",
      image: "https://i.imgur.com/zT6p7Dy.jpg"
    },
    {
      name: "Play Station 3 fat",
      status: "broken",
      desc: "One of my dad's friend gave him this broken PS3 with the hope to fix it, well never fixed it, but now i have a nice Sony paperweight",
      image: "https://i.imgur.com/lDK2JPQ.jpg"
    },
    {
      name: "Play Station 4 slim",
      status: "modded",
      desc: "Got this PS4 this year for very very very very cheap, got bored and modded it",
      image: "https://i.imgur.com/bO7f8Oe.jpg"
    },
    {
      name: "PSP 1000",
      status: "modded",
      desc: "Sony please make a new PSP we need it. One of my favourite console ever made, very powerful and super portable, we really need a new iteration of the PSP",
      image: "https://i.imgur.com/c9M7HAr.jpg"
    },
    {
      name: "Nintendo DS",
      status: "modded",
      desc: "I'm not really a Nintendo fan in fact i only have this DS because a friend of mine bought the 3DS so he gave me it. Nothing much to say, it has one of the top screen pin broken and (obiouvsly) no stylo",
      image: "https://i.imgur.com/vJ1d5ui.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
