import { Component, OnInit } from '@angular/core';
import {QuestionAComponent} from '../../components/questionA/questionA.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MainContentService } from 'src/app/services/main-content.service';
import { Answer } from '../../Models/Answer';
// import 'count()'import { count } from 'rxjs/operators';
//  from '../main-content/main-content.component';


@Component({
  selector: 'app-questionC',
  templateUrl: './questionC.component.html',
  styleUrls: ['./questionC.component.css']
})
export class QuestionCComponent
{}