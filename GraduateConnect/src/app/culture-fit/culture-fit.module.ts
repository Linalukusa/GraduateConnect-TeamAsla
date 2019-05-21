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

@NgModule({
  declarations: [
    CultureFitRootComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentBComponent,
    MainContentCComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class CultureFitModule { }
