import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../Service/client.service";
@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  token:any
  text;
  name;
  error;
  postData;
  unauthorised:any
  
  constructor(
    private route: ActivatedRoute,
    private clientservice: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
    this.clientservice.getPosts().subscribe(
      (res) => {
        this.postData = res;
      },
      (err) => {
        err;
      }
    );
  }
  Submit(e) {
    e.preventDefault();
    const createPost = {
      text: this.text,
      name: this.name,
      avatar: "https://www.gravatar.com/avatar/anything?s=200&d=mm",
      user: Math.random().toString(),
    };

    this.clientservice.createPost(createPost, this.token).subscribe(
      (res) => {
        this.router.navigateByUrl(`feed/${this.token}`);
      },
      (err) => {
        this.unauthorised = err.error;
        this.error = err.error.text;
      }
    );
  }
  LikePost(id) {
    this.clientservice.likePost(id, this.token).subscribe(
      (res) => {},
      (err) => {}
    );
  }
  unLikePost(id) {
    this.clientservice.unlikePost(id, this.token).subscribe(
      (res) => {},
      (err) => {}
    );
  }
  deletePost(id) {
    this.clientservice.DeletePost(id, this.token).subscribe(
      (res) => {
        this.router.navigateByUrl(`/feed/${this.token}`);
      },
      (err) => {}
    );
  }
}
