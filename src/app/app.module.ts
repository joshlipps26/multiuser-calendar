import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { ProfileComponent } from "./components/profile/profile.component";
import { CalendarComponent } from "./components/calendar/calendar.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCtokLWJBEb8N1veSWVZkI4cO1Dze3jh44",
  authDomain: "calendar-app-7239b.firebaseapp.com",
  databaseURL: "https://calendar-app-7239b.firebaseio.com",
  projectId: "calendar-app-7239b",
  storageBucket: "calendar-app-7239b.appspot.com",
  messagingSenderId: "265895014653",
  appId: "1:265895014653:web:a29b65749dcc0559dece94",
  measurementId: "G-X7N3QV3F76"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
