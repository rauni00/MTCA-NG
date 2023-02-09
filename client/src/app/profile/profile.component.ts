import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../Service/client.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  error;
  profileData;
  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private clientservice: ClientService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clientservice.getSingleProfile(id).subscribe(
      (res) => {
        this.profileData = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
