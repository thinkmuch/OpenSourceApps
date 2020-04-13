import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, AfterViewInit {

  @Input() topCircle: string;
  @Input() leftCircle: string;
  @Input() topLegend: string;
  @Input() leftLegend: string;
  @ViewChild("circle", { read: ElementRef }) circle: ElementRef;
  @ViewChild("legend", { read: ElementRef}) legend: ElementRef;
  
  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this._renderer.setStyle(this.circle.nativeElement, "top", this.topCircle + "%");
    this._renderer.setStyle(this.circle.nativeElement, "left", this.leftCircle + "%");
    this._renderer.setStyle(this.legend.nativeElement, "top", this.topLegend + "%");
    this._renderer.setStyle(this.legend.nativeElement, "left", this.leftLegend + "%");
  }
}
