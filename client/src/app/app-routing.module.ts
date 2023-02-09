import { PostComponent } from "./post/post.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { AddEducationComponent } from "./add-education/add-education.component";
import { AddExperienceComponent } from "./add-experience/add-experience.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./Layout/landing/landing.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/landing",
    pathMatch: "full",
  },
  {
    path: "landing",
    component: LandingComponent,
    pathMatch: "full",
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard/:token",
    component: DashboardComponent,
    // pathMatch: "full",
  },

  {
    path: ":token/add-exp",
    component: AddExperienceComponent,
    // pathMatch: "full",
  },
  {
    path: ":token/add-edu",
    component: AddEducationComponent,
    pathMatch: "full",
  },
  {
    path: ":token/edit-profile",
    component: EditProfileComponent,
    pathMatch: "full",
  },
  {
    path: "profiles",
    component: ProfilesComponent,
    pathMatch: "full",
  },
  {
    path: "feed/:token",
    component: FeedComponent,
    pathMatch: "full",
  },

  {
    path: "profile/:id",
    component: ProfileComponent,
    pathMatch: "full",
  },
  {
    path: "post/:id",
    component: PostComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
