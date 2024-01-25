import { ErrorComponent } from './error/error.component';
import { HighlightSearchDirective } from './highlight-search.directive';
import { HighlightDirective } from './highlight.directive';
import { AppConfig } from './AppConfig';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecruitmentComponent, ErrorComponent, HighlightDirective, FormsModule, CommonModule, HighlightSearchDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isShowRecruitment=false;
  isShowEror=false;
  AppConfig=AppConfig;

  searchTerm='';
}
