import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['../../home/style.css']
})


export class MonsterComponent implements OnInit {

  monsterData:any=[
    {name: "Ultra Fiesta", country: "Italy", image: "https://i.imgur.com/eVO1AVl.jpg"},
    {name: "Ultra Blue", country: "Poland", image: "https://i.imgur.com/6vysZX2.jpg"},
    {name: "Ultra Violet", country: "Poland", image: "https://i.imgur.com/tPS76Rr.jpg"},
    {name: "Mixxd", country: "Spain", image: "https://i.imgur.com/nYNvXUS.jpg"},
    {name: "Ultra Pipeline", country: "Italy", image: "https://i.imgur.com/0TkqM7i.jpg"},
    {name: "Ultra Paradise", country: "Italy", image: "https://i.imgur.com/YfNoIWY.jpg"},
    {name: "Ultra Fiesta", country: "Poland", image: "https://i.imgur.com/uWhFUwl.jpg"},
    {name: "Ultra Citron", country: "Italy", image: "https://i.imgur.com/qPqZGdI.jpg"},
    {name: "Ripper", country: "Poland", image: "https://i.imgur.com/FuwqzRV.jpg"},
    {name: "Pacific", country: "U.S.A.", image: "https://i.imgur.com/9vSoiqe.jpg"},
    {name: "Pacific", country: "Italy", image: "https://i.imgur.com/8BQRDlM.jpg"},
    {name: "Ultra Red", country: "Italy", image: "https://i.imgur.com/Jocyplr.jpg"},
    {name: "Ultra White", country: "Russia", image: "https://i.imgur.com/mCMhPnA.jpg"},
    {name: "Mean Bean", country: "U.S.A.", image: "https://i.imgur.com/Cd5xNLu.jpg"},
    {name: "Loca Moca", country: "U.S.A.", image: "https://i.imgur.com/tGZFXFm.jpg"},
    {name: "Pacific", country: "Poland", image: "https://i.imgur.com/EPgWtjB.jpg"},
    {name: "Ultra Sunrise", country: "Russia", image: "https://i.imgur.com/bdVr2re.jpg"},
    {name: "Mango Loco", country: "Poland", image: "https://i.imgur.com/rNpxgWE.jpg"},
    {name: "Ultra Fiesta", country: "Italy", image: "https://i.imgur.com/xYSamLx.jpg"},
    {name: "Ultra White", country: "Italy", image: "https://i.imgur.com/Wto4aEc.jpg"},
    {name: "Ultra Blue", country: "U.S.A.", image: "https://i.imgur.com/ZuUSZRv.jpg"},
    {name: "Lewis Hamilton 3 ★", country: "Italy", image: "https://i.imgur.com/esdqZ8H.jpg"},
    {name: "Mango Loco", country: "Italy", image: "https://i.imgur.com/9hl8a2d.jpg"},
    {name: "Mixxd", country: "Poland", image: "https://i.imgur.com/L4jcAMJ.jpg"},
    {name: "Ultra Watermelon", country: "Italy", image: "https://i.imgur.com/R89noH4.jpg"},
    {name: "The Doctor VR46", country: "Italy", image: "https://i.imgur.com/3CLfgXw.jpg"},
    {name: "Dragon Tea White", country: "U.S.A.", image: "https://i.imgur.com/OYzOnFG.jpg"},
    {name: "Absolutely Zero", country: "Italy", image: "https://i.imgur.com/ObQ2Qkz.jpg"},
    {name: "Absolutely Zero", country: "Italy", image: "https://i.imgur.com/QH6n7uw.jpg"},
    {name: "Monarch", country: "Poland", image: "https://i.imgur.com/EKO3F6G.jpg"},
    {name: "Ultra Black", country: "U.K.", image: "https://i.imgur.com/UW2Or1i.jpg"},
    {name: "Assault", country: "Italy", image: "https://i.imgur.com/YFweEYp.jpg"},
    {name: "Rehab Lemon", country: "Italy", image: "https://i.imgur.com/YFweEYp.jpg"},
    {name: "Khaos", country: "Italy", image: "https://i.imgur.com/Dsm9Efm.jpg"},
    {name: "Ripper", country: "Italy", image: "https://i.imgur.com/mWBRk1E.jpg"},
    {name: "Mule", country: "Poland", image: "https://i.imgur.com/BmqEF8W.jpg"},
    {name: "Irish Blend", country: "U.S.A.", image: "https://i.imgur.com/dw2bsvb.jpg"},
    {name: "Classic", country: "Russia", image: "https://i.imgur.com/YrEY3Vn.jpg"},
    {name: "Nitro", country: "Italy", image: "https://i.imgur.com/mQRDkkQ.jpg"},
    {name: "Classic", country: "Poland", image: "https://i.imgur.com/xJnIZdP.jpg"},
    {name: "Ultra Blue", country: "Greece", image: "https://i.imgur.com/EI2Hs0N.jpg"},
    {name: "Absolutely Zero", country: "U.S.A.", image: "https://i.imgur.com/xthmg8I.jpg"},
    {name: "Monarch", country: "Netherland", image: "https://i.imgur.com/C9qd3ew.jpg"},
    {name: "Ultra Gold", country: "U.S.A.", image: "https://i.imgur.com/qrFsc5S.jpg"},
    {name: "Nitro", country: "U.K.", image: "https://i.imgur.com/iyHEDTV.jpg"},
    {name: "Ripper", country: "Italy", image: "https://i.imgur.com/WE37kkZ.jpg"},
    {name: "COD: Infinity Warfare", country: "Italy", image: "https://i.imgur.com/9WgDODK.jpg"},
    {name: "Apex Legend", country: "Italy", image: "https://i.imgur.com/zx1r41Z.jpg"},
    {name: "COD: Black Ops 4", country: "Italy", image: "https://i.imgur.com/3dwLCqV.jpg"},
    {name: "Halo Infinite", country: "Italy", image: "https://i.imgur.com/aqoRU6H.jpg"},
    {name: "AC: Origins", country: "Italy", image: "https://i.imgur.com/s2vQOMg.jpg"}
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}


