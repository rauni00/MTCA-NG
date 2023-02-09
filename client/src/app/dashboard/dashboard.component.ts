import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../Service/client.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  profileData;
  token;
  unauthorised;
  noprofile;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientservice: ClientService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
    this.clientservice.getUserProfile(this.token).subscribe(
      (res: any) => {
        this.profileData = res;
      },
      (err) => {
        console.log(err.error);
        this.noprofile = err.error.noprofile;
      }
    );
  }
  deleteExp(id) {
    this.clientservice.deleteExperience(id, this.token).subscribe(
      (res) => {
        this.router.navigateByUrl(`/dashboard/${this.token}`);
      },
      (err) => err.error
    );
  }
  deleteEdu(id) {
    this.clientservice.deleteEducation(id, this.token).subscribe(
      (res) => {
        this.router.navigateByUrl(`/dashboard/${this.token}`);
      },
      (err) => err.error
    );
  }
  DeleteAccount() {
    this.clientservice.deleteUserProfile(this.token).subscribe(
      (res) => {
        alert("Your Account is Delete Successfully..");
        this.router.navigateByUrl("/landing");
      },
      (err) => {
        err.error;
      }
    );
  }
}
