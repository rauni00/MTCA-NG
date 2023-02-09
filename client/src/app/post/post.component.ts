import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "../Service/client.service";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  postByID;
  id;
  constructor(
    private route: ActivatedRoute,
    private clientservice: ClientService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.clientservice.getPostByID(this.id).subscribe(
      (res) => {
        this.postByID = res;
      },
      (err) => {}
    );
  }
}
