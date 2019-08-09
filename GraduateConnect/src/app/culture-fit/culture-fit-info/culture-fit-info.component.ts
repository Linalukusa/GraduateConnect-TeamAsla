import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionAComponent } from '../components/questionA/questionA.component';

@Component({
  selector: 'app-culture-fit-info',
  templateUrl: './culture-fit-info.component.html',
  styleUrls: ['./culture-fit-info.component.css']
})
export class CultureFitInfoComponent implements OnInit {
  showSpinner: boolean = false;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openQuestionA()
  {
    this.dialog.open(QuestionAComponent, {
      disableClose: true,
      height: '1000px',
      width: '70%',
    })
  }
  
}
