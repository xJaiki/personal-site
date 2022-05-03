import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './features/collections/console/console.component';
import { GearComponent } from './features/collections/gear/gear.component';
import { KeyforgeComponent } from './features/collections/keyforge/keyforge.component';
import { MonsterComponent } from './features/collections/monster/monster.component';
import { AboutComponent } from './features/home/about/about.component';
import { LikesComponent } from './features/home/likes/likes.component';
import { OtherComponent } from './features/home/other/other.component';
import { WelcomeComponent } from './features/home/welcome/welcome.component';
import { CollectionsNavComponent } from './Navigation/collections-nav/collections-nav.component';
import { HomeNavComponent } from './Navigation/home-nav/home-nav.component';
import { ProjectsNavComponent } from './Navigation/projects-nav/projects-nav.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "home"
},{
  path: "home",
  component: HomeNavComponent,
  children: [{
    path: "",
    redirectTo: "welcome",
    pathMatch: "full"
  },{
    path: "welcome",
    component: WelcomeComponent
  },{
    path: "about",
    component: AboutComponent
  },{
    path: "likes",
    component: LikesComponent
  },{
    path: "other",
    component: OtherComponent
  }]
},{
  path: "collections",
  component: CollectionsNavComponent,
  children: [{
    path: "",
    redirectTo: "monster",
    pathMatch: "full"
  },{
    path: "monster",
    component: MonsterComponent
  },{
    path: "keyforge",
    component: KeyforgeComponent
  },{
    path: "console",
    component: ConsoleComponent
  },{
    path: "gear",
    component: GearComponent
  },]
},{
  path: "projects",
  component: ProjectsNavComponent,
  children: [{
    path: "",
    redirectTo: "monster",
    pathMatch: "full"
  },{
    path: "monster",
    component: MonsterComponent
  },{
    path: "keyforge",
    component: KeyforgeComponent
  }]
},{
  path: "socials",
  component: CollectionsNavComponent,
  children: [{
    path: "",
    redirectTo: "monster",
    pathMatch: "full"
  },{
    path: "monster",
    component: MonsterComponent
  },{
    path: "keyforge",
    component: KeyforgeComponent
  }]
},{
    path: "**", 
    redirectTo: "home/welcome"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
