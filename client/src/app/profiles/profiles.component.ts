import { Component, OnInit } from "@angular/core";
import { ClientService } from "../Service/client.service";
import { ActivatedRoute, Router, Route } from "@angular/router";

@Component({
  selector: "app-profiles",
  templateUrl: "./profiles.component.html",
  styleUrls: ["./profiles.component.css"],
})
export class ProfilesComponent implements OnInit {
  profileData;
  constructor(private clientservice: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientservice.getAllProfiles().subscribe(
      (res) => {
        this.profileData = res;
      },
      (err) => {}
    );
  }
  userID(id) {
    this.router.navigateByUrl(`/profile/${id}`);
  }
}
