import { Component } from "@angular/core";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
  viewDate: Date = new Date();
  events = [];
}
