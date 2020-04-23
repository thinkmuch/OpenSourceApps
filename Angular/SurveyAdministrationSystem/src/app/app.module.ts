import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys/surveys.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveySummaryComponent } from './pages/surveys/surveys/survey-summary/survey-summary.component';
import { NewEditSurveyComponent } from './pages/surveys/newsurvey/new-edit-survey/new-edit-survey.component';
import { MenuSummarySurveyComponent } from './pages/surveys/surveys/menu-summary-survey/menu-summary-survey.component';
import { ControlButtonsComponent } from './pages/surveys/newsurvey/new-edit-survey/control-buttons/control-buttons.component';
import { QuestionComponent } from './pages/surveys/newsurvey/new-edit-survey/question/question.component';  
import { AnswerTypesCatalogComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/answer-types-catalog/answer-types-catalog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SingleSelectionAnswerPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/single-selection-answer-preview/single-selection-answer-preview.component';
import { FreeTextAnswerPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/free-text-answer-preview/free-text-answer-preview.component';
import { SitesCatalogModalComponent } from "./pages/surveys/newsurvey/new-edit-survey/question/sites-catalog-modal/sites-catalog-modal.component";
import { MultipleChoisesPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/multiple-choises-preview/multiple-choises-preview.component';
import { FooterComponent } from './pages/surveys/newsurvey/new-edit-survey/footer/footer.component';
import { DropdownPredefinedAnswerComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/dropdown-single-selection-answer/dropdown-predefined-answer.component';
import { QuestionMenuComponent } from './pages/surveys/newsurvey/new-edit-survey/question/question-menu/question-menu.component';
import { AddLanguageComponent } from './pages/surveys/add-language/add-language.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { ChartsModule } from 'ng2-charts';
import { SurveysNameListComponent } from './pages/dashboard/surveys-name-list/surveys-name-list.component';
import { QuestionListComponent } from './pages/dashboard/question-list/question-list.component';
import { SearchButtonsComponent } from './pages/dashboard/search-buttons/search-buttons.component';
import { SatisfactionBarComponent } from './pages/dashboard/satisfaction-bar/satisfaction-bar.component';
import { PercentageBarComponent } from './pages/dashboard/percentage-bar/percentage-bar.component';
import { SquaresComponent } from './pages/catalogs/squares/squares.component';
import { HotelsComponent } from './pages/catalogs/hotels/hotels.component';
import { SitesComponent } from './pages/catalogs/sites/sites.component';
import { DepartmentsComponent } from './pages/catalogs/departments/departments.component';
import { AreasComponent } from './pages/catalogs/areas/areas.component';
import { LanguagesComponent } from './pages/catalogs/languages/languages.component';
import { CruisesComponent } from './pages/catalogs/cruises/cruises.component';
import { AnswersComponent } from './pages/catalogs/answers/answers.component';
import { CruiseDetailComponent } from './pages/catalogs/cruises/cruise-detail/cruise-detail.component';
import { CruisesTableComponent } from './pages/catalogs/cruises/cruises-table/cruises-table.component';
import { AreasTableComponent } from './pages/catalogs/areas/areas-table/areas-table.component';
import { LanguagesTableComponent } from './pages/catalogs/languages/languages-table/languages-table.component';
import { SitesTableComponent } from './pages/catalogs/sites/sites-table/sites-table.component';
import { HotelsTableComponent } from './pages/catalogs/hotels/hotels-table/hotels-table.component';
import { HotelDetailComponent } from './pages/catalogs/hotels/hotel-detail/hotel-detail.component';
import { SquaresTableComponent } from './pages/catalogs/squares/squares-table/squares-table.component';
import { SquareDetailComponent } from './pages/catalogs/squares/square-detail/square-detail.component';
import { DepartmentDetailComponent } from './pages/catalogs/departments/department-detail/department-detail.component';
import { DepartmentsTableComponent } from './pages/catalogs/departments/departments-table/departments-table.component';
import { AnswersTableComponent } from './pages/catalogs/answers/answers-table/answers-table.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ConfigOptionsComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/config-options/config-options.component';
import { SquareHotelCatalogComponent } from './pages/surveys/newsurvey/new-edit-survey/footer/square-hotel-catalog/square-hotel-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  entryComponents: [
    SitesCatalogModalComponent,
    SquareHotelCatalogComponent
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SurveysComponent,
    SurveySummaryComponent,
    NewEditSurveyComponent,
    MenuSummarySurveyComponent,
    ControlButtonsComponent,
    QuestionComponent,
    AnswerTypesCatalogComponent,
    SingleSelectionAnswerPreviewComponent,
    FreeTextAnswerPreviewComponent,
    SitesCatalogModalComponent,
    MultipleChoisesPreviewComponent,
    FooterComponent,
    DropdownPredefinedAnswerComponent,
    QuestionMenuComponent,
    AddLanguageComponent,
    CatalogsComponent,
    SurveysNameListComponent,
    QuestionListComponent,
    SearchButtonsComponent,
    SatisfactionBarComponent,
    PercentageBarComponent,
    SquaresComponent,
    HotelsComponent,
    SitesComponent,
    DepartmentsComponent,
    AreasComponent,
    LanguagesComponent,
    CruisesComponent,
    AnswersComponent,
    CruiseDetailComponent,
    CruisesTableComponent,
    AreasTableComponent,
    LanguagesTableComponent,
    SitesTableComponent,
    HotelsTableComponent,
    HotelDetailComponent,
    SquaresTableComponent,
    SquareDetailComponent,
    DepartmentDetailComponent,
    DepartmentsTableComponent,
    AnswersTableComponent,
    ReportesComponent,
    ConfigOptionsComponent,
    SquareHotelCatalogComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
