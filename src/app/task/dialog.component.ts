import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BodyData } from "../shared/data.interface";
import { SharedModule } from "../shared/shared.module";

@Component({
  standalone: true,
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  imports: [ SharedModule ],
})

export class DialogComponent implements OnInit {
  info: BodyData | undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.info = this.data.data
  }
}
