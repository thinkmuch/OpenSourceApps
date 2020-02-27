import { Component, OnInit } from '@angular/core';
import { SquareServices } from 'src/app/services/square-services';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';
import { AreasServices } from 'src/app/services/areas-services';
import { Area } from 'src/app/models/area';
import { SurveyServices } from 'src/app/services/survey-services';
import { SurveySummary } from 'src/app/models/survey-summary';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  squares: Array<Square>;
  hotels: Array<Hotel>;
  areas: Array<Area>;
  squareSelected: Square;
  hotelSelected: Hotel;
  areaSelected: Area;
  surveys: Array<SurveySummary>;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Grand Luxxe', 'The Grand Bliss', 'The Grand Mayan', 'The Bliss', 'Mayan Palace'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56], label: 'Series A' }
  ];

  constructor(
    private _squaresServices: SquareServices,
    private _areasServices: AreasServices,
    private _surveyServices: SurveyServices
  ) { }

  ngOnInit() {
    this.squares = this._squaresServices.getAllSquares();
    this.hotels = this._squaresServices.getAllHotels();
    this.areas = this._areasServices.getAllAreas();
    this.surveys = this._surveyServices.getAllSurveysSummary();
  }

  onClickSquare(square: Square) {
    this.squareSelected = square;
  }

  onClickHotel(hotel: Hotel) {
    this.hotelSelected = hotel;
  }

  onClickArea(area: Area) {
    this.areaSelected = area;
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
