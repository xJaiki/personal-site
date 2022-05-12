import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './Navigation/main-nav/main-nav.component';
import { HomeNavComponent } from './Navigation/home-nav/home-nav.component';
import { CollectionsNavComponent } from './Navigation/collections-nav/collections-nav.component';
import { WelcomeComponent } from './features/home/welcome/welcome.component';
import { AboutComponent } from './features/home/about/about.component';
import { LikesComponent } from './features/home/likes/likes.component';
import { OtherComponent } from './features/home/other/other.component';
import { MonsterComponent } from './features/collections/monster/monster.component';
import { KeyforgeComponent } from './features/collections/keyforge/keyforge.component';
import { ProjectsNavComponent } from './Navigation/projects-nav/projects-nav.component';
import { SocialsNavComponent } from './Navigation/socials-nav/socials-nav.component';
import { ConsoleComponent } from './features/collections/console/console.component';
import { GearComponent } from './features/collections/gear/gear.component';
import { DevComponent } from './features/projects/dev/dev.component';
import { GraphicComponent } from './features/projects/graphic/graphic.component';
import { OtherProjectsComponent } from './features/projects/other-projects/other-projects.component';
import { SocialsComponent } from './features/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeNavComponent,
    CollectionsNavComponent,
    WelcomeComponent,
    AboutComponent,
    LikesComponent,
    OtherComponent,
    MonsterComponent,
    KeyforgeComponent,
    ProjectsNavComponent,
    SocialsNavComponent,
    ConsoleComponent,
    GearComponent,
    DevComponent,
    GraphicComponent,
    OtherProjectsComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
