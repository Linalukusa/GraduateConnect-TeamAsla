import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuestionAComponent } from '../components/questionA/questionA.component';

@Component({
  selector: 'app-culture-fit-info',
  templateUrl: './culture-fit-info.component.html',
  styleUrls: ['./culture-fit-info.component.css']
})
export class CultureFitInfoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog()
  {
    this.dialog.open(QuestionAComponent)
  }
}
