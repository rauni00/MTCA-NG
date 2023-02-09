import { Component, OnInit } from "@angular/core";
import { ClientService } from "../Service/client.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-education",
  templateUrl: "./add-education.component.html",
  styleUrls: ["./add-education.component.css"],
})
export class AddEducationComponent implements OnInit {
  school;
  degree;
  fieldofstudy;
  from;
  to;
  current;
  description;
  errors;
  token;
  constructor(
    private clientservice: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
  }
  Submit(e) {
    e.preventDefault;
    const addEdu = {
      school: this.school,
      degree: this.degree,
      fieldofstudy: this.fieldofstudy,
      from: this.from,
      to: this.to,
      current: this.current,
      description: this.description,
    };
    this.clientservice.addEducation(addEdu, this.token).subscribe(
      (res) => this.router.navigateByUrl(`/dashboard/${this.token}`),
      (err) => (this.errors = err.error)
    );
  }
}
