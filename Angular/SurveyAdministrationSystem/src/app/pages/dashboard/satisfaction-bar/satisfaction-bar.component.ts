import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-satisfaction-bar',
  templateUrl: './satisfaction-bar.component.html',
  styleUrls: ['./satisfaction-bar.component.css']
})
export class SatisfactionBarComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: 
    { xAxes: [{

    }], 
    yAxes: [{
      ticks: {
        max: 100,
        min: 0
      }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Grand Luxxe', 'The Grand Bliss', 'The Grand Mayan', 'The Bliss', 'Mayan Palace'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56], label: 'Hotel' }
  ];

  constructor() { }

  ngOnInit() {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)];
      
    this.barChartData[0].data = data;
  }
}