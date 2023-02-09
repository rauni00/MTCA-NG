import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../Service/client.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  name;
  email;
  password;
  password2;
  errors;
  success;
  constructor(private clientService: ClientService) {}
  ngOnInit(): void {}
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      password2: this.password2,
    };
    this.clientService.signup(newUser).subscribe(
      (res: any) => {
        this.success = res.name;
      },
      (err) => {
        this.errors = err.error;
      }
    );
  }
}
