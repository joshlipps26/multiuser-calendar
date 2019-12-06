import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.css"]
})
export class PasswordResetComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  resetPassword(email: string) {
    this.auth.resetPassword(email);
  }
}
