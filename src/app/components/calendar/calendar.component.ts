import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent {
  viewDate: Date = new Date();
  events = [];
}
