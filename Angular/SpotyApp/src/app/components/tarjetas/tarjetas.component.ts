import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() songs: any[];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  seeArtist(song: any) {
    
    let artistId: string = (song.type === 'artist') ? song.id : song.artists[0].id;
    this._router.navigate(['/artist', artistId]);
  }
}
