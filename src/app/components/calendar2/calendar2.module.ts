import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlatpickrModule } from "angularx-flatpickr";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { Calendar2Component } from "./calendar2.component";

//dialog
import { MatDialogModule } from "@angular/material";
import { AddEventComponent } from "./add-event/add-event.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [Calendar2Component, AddEventComponent],
  exports: [Calendar2Component],
  entryComponents: [AddEventComponent]
})
export class DemoModule {}
