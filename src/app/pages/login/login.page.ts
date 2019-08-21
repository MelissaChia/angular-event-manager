import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/user/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email;
  password;
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  loginUser() {
    this.authService.loginUser(this.email, this.password).then(() => {
      console.log("logged in");
    });
  }
}
