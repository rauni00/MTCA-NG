import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ClientService } from "../Service/client.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  handle;
  handle2 = "rahul";
  status;
  company;
  date;
  location;
  skills;
  githubusername;
  bio;
  twitter;
  facebook;
  linkedin;
  youtube;
  instagram;
  errors;
  token;
  constructor(
    private route: ActivatedRoute,
    private clientservice: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
  }
  Submit(e) {
    e.preventDefault();
    const newProfile = {
      handle: this.handle,
      status: this.status,
      company: this.company,
      date: this.date,
      location: this.location,
      skills: this.skills,
      githubusername: this.githubusername,
      bio: this.bio,
      twitter: this.twitter,
      facebook: this.facebook,
      linkedin: this.linkedin,
      youtube: this.youtube,
      instagram: this.instagram,
    };
    this.clientservice.createEditProfile(newProfile, this.token).subscribe(
      (res) => {
        this.router.navigateByUrl(`/dashboard/${this.token}`);
      },
      (err) => {
        this.errors = err.error;
      }
    );
  }
}
