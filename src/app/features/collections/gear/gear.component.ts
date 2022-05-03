import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['../../home/style.css']
})
export class GearComponent implements OnInit {

  gearData:any=[
    {
      name: "AKG K52",
      image: "https://i.imgur.com/mAUoZHr.jpg",
      desc: ""
    },
    {
      name: "PowerA Moga XP5-X Plus",
      image: "https://i.imgur.com/L0SFnnC.jpg",
      desc: ""
    },
    {
      name: "Oculus Rift",
      image: "https://i.imgur.com/ryHhdFj.jpg",
      desc: ""
    },
    {
      name: "Neewer Nw-800",
      image: "https://i.imgur.com/sWPoCHZ.jpg",
      desc: ""
    },
    {
      name: "Xiaomi Earbuds lite 2",
      image: "https://i.imgur.com/C5QcOhZ.jpg",
      desc: ""
    },
    {
      name: "ACGam AG-109R",
      image: "https://i.imgur.com/Ux0WjH4.jpg",
      desc: ""
    },
    {
      name: "DDR dance pad",
      image: "https://i.imgur.com/zfmA49G.jpg",
      desc: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
