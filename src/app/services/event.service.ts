import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Event } from "../models/event.model";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private firestore: AngularFirestore) {}

  // get all events
  getEvents() {
    return this.firestore.collection("events").snapshotChanges();
  }

  // create an event
  createEvent(event: Event) {
    return this.firestore.collection("events").add(event);
  }

  // delete an event

  // update an event
}
