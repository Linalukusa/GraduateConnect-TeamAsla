//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

//Components
import { CultureFitRootComponent } from './culture-fit-root.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentBComponent } from './components/main-contentB/main-contentB.component';
import { MainContentCComponent } from './components/main-content-c/main-content-c.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    CultureFitRootComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentBComponent,
    MainContentCComponent,
    HeroesComponent,
    HeroComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class CultureFitModule { }
