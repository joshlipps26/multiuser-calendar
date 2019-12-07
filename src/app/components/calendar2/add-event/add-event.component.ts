import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.css"]
})
export class AddEventComponent implements OnInit {
  description = "";
  date: Date;

  constructor(
    private dialogRef: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.description;
    this.date = data.date;
  }

  ngOnInit() {}

  addEvent(frm) {
    console.log(frm.value.message);
    this.dialogRef.close(frm.value.message);
  }
}
