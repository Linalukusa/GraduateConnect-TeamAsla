import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-lang-dialog',
  templateUrl: './lang-dialog.component.html',
  styleUrls: ['./lang-dialog.component.css']
})
export class LangDialogComponent implements OnInit {

mylang: string;

  constructor(public dialogRef: MatDialogRef<LangDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  add(){
this.dialogRef.close("IT was added");
  }
}
