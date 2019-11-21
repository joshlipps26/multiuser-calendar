import { Component } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["test.component.css"]
})
export class TestComponent {
  //class code goes here
  //properties
  firstName = "John";
  lastName = "Doe";
  age = 30;

  //methods
  constructor() {
    console.log("test component init");
    this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }
}
