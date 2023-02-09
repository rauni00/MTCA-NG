import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../Service/client.service";

@Component({
  selector: "app-add-experience",
  templateUrl: "./add-experience.component.html",
  styleUrls: ["./add-experience.component.css"],
})
export class AddExperienceComponent implements OnInit {
  title;
  company;
  location;
  from;
  to;
  current;
  description;
  errors;
  token;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientservice: ClientService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
  }
  Submit(e) {
    e.preventDefault;
    const addExp = {
      title: this.title,
      company: this.company,
      location: this.location,
      from: this.from,
      to: this.to,
      current: this.current,
      description: this.description,
    };
    this.clientservice.addExperience(addExp, this.token).subscribe(
      (res) => {
        this.router.navigateByUrl(`/dashboard/${this.token}`);
      },
      (err) => {
        this.errors = err.error;
      }
    );
  }
}
