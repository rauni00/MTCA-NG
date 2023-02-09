import { LandingComponent } from "./Layout/landing/landing.component";
import { FooterComponent } from "./Layout/footer/footer.component";
import { LoginComponent } from "./auth/login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./auth/register/register.component";
import { AddEducationComponent } from "./add-education/add-education.component";
import { AddExperienceComponent } from "./add-experience/add-experience.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { FeedComponent } from "./feed/feed.component";
import { NavBarComponent } from "./Layout/nav-bar/nav-bar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PostComponent } from "./post/post.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { AfterLoginNavComponent } from "./Layout/after-login-nav/after-login-nav.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    LandingComponent,
    AddEducationComponent,
    AddExperienceComponent,
    DashboardComponent,
    EditProfileComponent,
    FeedComponent,
    NavBarComponent,
    NotFoundComponent,
    PostComponent,
    ProfileComponent,
    ProfilesComponent,
    AfterLoginNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
