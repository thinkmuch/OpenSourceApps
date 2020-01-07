import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyServices: SpotifyService
   ) { 

    this._activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {

    this._spotifyServices.getArtista(id)
        .subscribe(artista => {
          console.log(artista);
          this.artista = artista;
        });
  }

}
