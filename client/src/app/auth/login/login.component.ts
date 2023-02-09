import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../Service/client.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email;
  password;
  errors;
  token;
  constructor(private clientservice: ClientService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.email,
      password: this.password,
    };

    this.clientservice.login(newUser).subscribe(
      (res: any) => {
        this.token = res.token;
        this.clientservice.getUserProfile(this.token).subscribe(
          (res) => {
            this.router.navigateByUrl(`/dashboard/${this.token}`);
          },
          (err) => {
            console.log(err.error);
            this.router.navigateByUrl(`${this.token}/edit-profile`);
          }
        );
      },
      (err) => {
        this.errors = err.error;
      }
    );
  }
}
