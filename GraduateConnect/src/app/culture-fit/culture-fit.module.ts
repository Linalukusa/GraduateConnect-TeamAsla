//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import {FormsModule} from '@angular/forms';

//Components
import { CultureFitRootComponent } from './culture-fit-root.component';
import { QuestionAComponent } from './components/questionA/questionA.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { QuestionBComponent } from './components/questionB/questionB.component';
//import { QuestionCComponent } from './components/questionC/questionC.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { QuestionCComponent } from './components/questionC/questionC.component';
import { QuestionDComponent } from './components/questionD/questionD.component';
import { QuestionEComponent } from './components/questionE/questionE.component';
import { CultureFitInfoComponent } from './culture-fit-info/culture-fit-info.component';

@NgModule({
  declarations: [
    CultureFitRootComponent,
    QuestionAComponent,
    SidenavComponent,
    ToolbarComponent,
    QuestionBComponent,
    //QuestionCComponent,
    HeroesComponent,
    HeroComponent,
    QuestionCComponent,
    QuestionDComponent,
    QuestionEComponent,
    CultureFitInfoComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
   
    FormsModule
  ]
})
export class CultureFitModule { }
